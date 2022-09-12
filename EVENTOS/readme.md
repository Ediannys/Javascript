## Eventos en Javascript:
``` 
<script>
  function doTask() {
    alert("Hello!");
  }
</script>
<button onClick="doTask()">Saludar</button>
```

## Eventos a través del DOM
``` 
<button>Saludar</button>

<script>
    const button = document.querySelector("button");
    button.onclick = function() {
        alert("Hello!");
    }
</script>
```

* Utilizando setAttribute() 
``` 
<button>Saludar</button>
<script>
    const button = document.querySelector("button");
    const doTask = () => alert("Hello!");
    button.setAttribute("onclick", "doTask()");
</script>
```

* Con .addEventListener() se pueden añadir fácilmente varias funcionalidades.
    - .addEventListener(event,func)	Escucha el evento event, y si ocurre, ejecuta func.
    - .addEventListener(event,func,options)	Idem, pasándole ciertas opciones.
``` 
const button = document.querySelector("button");
button.addEventListener("click", function() {
  alert("Hello!");
});
```

``` 
const button = document.querySelector("button");
function action() {
  alert("Hello!");
};
button.addEventListener("click", action);
```  

``` 
const button = document.querySelector("button");
const action = () => alert("Hello!");
button.addEventListener("click", action);
```  
* Con .removeEventListener() se puede eliminar una funcionalidad previamente añadida.
* Con .addEventListener() se pueden indicar ciertos comportamientos especiales.

## Múltiples listeners
``` 
<button>Saludar</button>

<style>
  .red { background: red }
</style>

<script>
const button = document.querySelector("button");
const action = () => alert("Hello!");
const toggle = () => button.classList.toggle("red");

button.addEventListener("click", action);         // Hello message
button.addEventListener("click", toggle);         // Add/remove red CSS
</script>
```

## Método .removeEventListener() 

* .removeEventListener(event,func)	Elimina la funcionalidad func asociada al evento event.
``` 
<button>Saludar</button>

<style>
  .red { background: red }
</style>

<script>
const button = document.querySelector("button");
const action = () => alert("Hello!");
const toggle = () => button.classList.toggle("red");

button.addEventListener("click", action);         // Add listener
button.addEventListener("click", toggle);         // Toggle red CSS
button.removeEventListener("click", action);      // Delete listener
</script>
```


## Construido con 🛠️

* [lenguajejs](https://lenguajejs.com/javascript/dom/que-es/) - Toda la información
