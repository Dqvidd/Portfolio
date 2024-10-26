<template>
  <div class="max-w-3xl mx-auto p-6 font-sans leading-relaxed">
    <h1 class="text-6xl font-bold text-center mb-12">ELF x86 - Fake Instructions</h1>
    <p class="text-2xl mb-4">Vemos que es un binario en ELF 32 bits el cual nos pide una contraseña como entrada. Si ponemos mal la contraseña, se nos indica:</p>
    <img src="/assets/Pasted image 20241026170224.png" alt="Error de contraseña" class="max-w-full h-auto my-4 rounded-lg shadow" />
    
    <p class="text-2xl mb-4">Al abrir el IDA, vemos la función Main en la cual es donde se nos pide el input del programa. Cambiamos el nombre de la variable a input:</p>
    <img src="/assets/Pasted image 20241026170339.png" alt="Función Main" class="max-w-full h-auto my-4 rounded-lg shadow" />
    
    <p class="text-2xl mb-4">Además, vemos que se está ejecutando una función WPA la cual pasa por parámetro v7 (la cual es igual al input) y un dest:</p>
    <img src="/assets/Pasted image 20241026170451.png" alt="Función WPA" class="max-w-full h-auto my-4 rounded-lg shadow" />
    
    <p class="text-2xl mb-4">Analizamos la función de WPA. Aquí vemos que la variable s2 se está comparando con input:</p>
    <img src="/assets/Pasted image 20241026170541.png" alt="Comparación" class="max-w-full h-auto my-4 rounded-lg shadow" />
    
    <p class="text-2xl mb-4">No solo eso, sino que antes de compararse s2 vemos que se modifican dos valores de la cadena en ASCII, los cuales equivalen a /r y /n. Además, vemos que en blowfish hace un printf de una variable llamada aAuthentificati, que podría ser la flag final:</p>
    <img src="/assets/Pasted image 20241026171825.png" alt="printf en Blowfish" class="max-w-full h-auto my-4 rounded-lg shadow" />
    
    <p class="text-2xl mb-4">Lo que queremos es que se cumpla la comparación del strcmp, por lo que lo que vamos a intentar primeramente es poner un breakpoint justo antes del strcmp, por ejemplo en el puts(s), e intentar ver el valor de s2.</p>
    
    <p class="text-2xl mb-4">Aquí vemos la dirección de memoria del puts 0x80486E3:</p>
    <img src="/assets/Pasted image 20241026170750.png" alt="Dirección de memoria del puts" class="max-w-full h-auto my-4 rounded-lg shadow" />
    
    <p class="text-2xl mb-4">Y vemos que la variable que nos interesa, s2, se denomina como ebp.</p>
    <p class="text-2xl mb-4">Hacemos el break y runeamos:</p>
    <img src="/assets/Pasted image 20241026170937.png" alt="Break en s2" class="max-w-full h-auto my-4 rounded-lg shadow" />
    
    <p class="text-2xl mb-4">Ahora vemos la lista de registros disponibles:</p>
    <img src="/assets/Pasted image 20241026170956.png" alt="Lista de registros" class="max-w-full h-auto my-4 rounded-lg shadow" />
    
    <p class="text-2xl mb-4">Y sacamos en formato texto el valor de ebp:</p>
    <img src="/assets/Pasted image 20241026171045.png" alt="Valor de ebp" class="max-w-full h-auto my-4 rounded-lg shadow" />
    
    <p class="text-2xl mb-4">Esa debería ser la contraseña. Aún así, haciendo pruebas no he podido darla como válida. He probado a quitarle el \n y \r, separarlo las dos cadenas que se ven, todo junto… Pero nada.</p>
    
    <h2 class="text-5xl font-semibold mt-8 mb-8">SOLUCIÓN 1</h2>
    <p class="text-2xl mb-4">Dado que por esa vía no podía sacarlo, he visto que podía hacer algo más sencillo, y es hacer un breakpoint justo en el strcmp y cambiarle el valor de la comparación IF de falso (1) a verdadero (0). Vamos a hacerlo.</p>
    <p class="text-2xl mb-4">La dirección de memoria del strcmp que nos interesa es en la que se hace la comparación de true o false del IF. En este caso es justo la anterior al jnz que es el test 0x80486FA:</p>
    <img src="/assets/Pasted image 20241026171359.png" alt="Dirección de memoria del strcmp" class="max-w-full h-auto my-4 rounded-lg shadow" />
    
    <p class="text-2xl mb-4">Así que lo ejecutamos:</p>
    <img src="/assets/Pasted image 20241026171418.png" alt="Ejecutar el strcmp" class="max-w-full h-auto my-4 rounded-lg shadow" />
    
    <p class="text-2xl mb-4">Y vamos a ver el valor de los registros. Como vemos, el que nos interesa modificar que es eax está con valor 1:</p>
    <img src="/assets/Pasted image 20241026171509.png" alt="Valor de eax" class="max-w-full h-auto my-4 rounded-lg shadow" />
    
    <p class="text-2xl mb-4">Así que vamos a modificarle el valor a 0:</p>
    <img src="/assets/Pasted image 20241026171525.png" alt="Modificar eax a 0" class="max-w-full h-auto my-4 rounded-lg shadow" />
    
    <p class="text-2xl mb-4">Una vez modificado, vamos a continuar la ejecución. Finalmente, nos muestra la contraseña:</p>
    <img src="/assets/Pasted image 20241026171602.png" alt="Contraseña mostrada" class="max-w-full h-auto my-4 rounded-lg shadow" />
    
    <p class="text-2xl mb-4">Me quedo con la espinita clavada de saber cuál es la password de entrada, ya que debería haber sido algo parecido a:</p>
    <pre class="bg-gray-100 p-2 rounded overflow-auto mb-4"><code class="hljs">&quot;_0cGjc5m_.5\r\nÇ8CJ0À9&quot;</code></pre>
    
    <p class="text-2xl mb-4">Pero bueno, modificando el registro del if hemos accedido dentro, que era lo que nos interesaba.</p>
    
    <h2 class="text-5xl font-semibold mt-8 mb-8">SOLUCIÓN 2</h2>
    <p class="text-2xl mb-4">Más fácil aún, podemos modificar la instrucción jnz y modificarla a jz, así lo que haríamos es que siempre que el IF NO se cumpla, devuelva true. Justo lo contrario a lo que debería hacer, por lo tanto ante cualquier contraseña introducida nos valdría y ejecutaría la función de blowfish().</p>
    <p class="text-2xl mb-4">Nos ponemos encima del jnz:</p>
    <img src="/assets/Pasted image 20241026175051.png" alt="Modificar jnz a jz" class="max-w-full h-auto my-4 rounded-lg shadow" />
    
    <p class="text-2xl mb-4">Lo modificamos a jnz mediante el Patch Program:</p>
    <img src="/assets/Pasted image 20241026175118.png" alt="Patch Program jnz" class="max-w-full h-auto my-4 rounded-lg shadow" />
    <img src="/assets/Pasted image 20241026175134.png" alt="Patch Program jnz" class="max-w-full h-auto my-4 rounded-lg shadow" />
    <img src="/assets/Pasted image 20241026175141.png" alt="Patch Program jnz" class="max-w-full h-auto my-4 rounded-lg shadow" />
    
    <p class="text-2xl mb-4">Aplicamos los cambios:</p>
    <img src="/assets/Pasted image 20241026175155.png" alt="Aplicar cambios" class="max-w-full h-auto my-4 rounded-lg shadow" />
    <img src="/assets/Pasted image 20241026175206.png" alt="Aplicar cambios" class="max-w-full h-auto my-4 rounded-lg shadow" />
    
    <p class="text-2xl mb-4">Ahora, ante cualquier contraseña errónea, nos dará el resultado que queremos:</p>
    <img src="/assets/Pasted image 20241026175246.png" alt="Resultado final" class="max-w-full h-auto my-4 rounded-lg shadow" />
  </div>
</template>

<script setup>
// Aquí puedes agregar lógica adicional si lo necesitas
</script>