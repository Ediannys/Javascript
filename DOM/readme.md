

## Buscar Etiquetas:
* .getElementById(id)	Busca el elemento HTML con el id id. Si no devuelve Null
* .getElementsByClassName(class)	Busca elementos con la clase class. Si no, devuelve [].
* .getElementsByName(name)	Busca elementos con atributo name name. Si no, devuelve [].
* .getElementsByTagName(tag)	Busca elementos tag. Si no encuentra ninguno, devuelve [].

* .querySelector(sel)	Busca el primer elemento que coincide con el selector CSS sel. Si no, .
* .querySelectorAll(sel)	Busca todos los elementos que coinciden con el selector CSS sel. Si no, [].
``` const page = document.querySelector("#page");
    const info = document.querySelector(".main .info");
    const infos = document.querySelectorAll(".info");
    const nicknames = document.querySelectorAll('[name="nickname"]');
    const divs = document.querySelectorAll("div");
```

## Crear elementos HTML:
* .createElement(tag, options)	Crea y devuelve el elemento HTML definido por el  tag.
* .createComment(text)	Crea y devuelve un nodo de comentarios HTML <!-- text -->.
* .createTextNode(text)	Crea y devuelve un nodo HTML con el texto text.
```
const div = document.createElement("div");      // Creamos un <div></div>
const span = document.createElement("span");    // Creamos un <span></span>
const img = document.createElement("img");      // Creamos un <img>
const comment = document.createComment("Comentario"); // <!--Comentario-->
const text = document.createTextNode("Hola");         // Nodo de texto: 'hola'
```
* .cloneNode(deep)	Clona el nodo HTML y devuelve una copia. deep es false por defecto.
    - Asi no se hace una copia
    ```
    const div = document.createElement("div");
    div.textContent = "Elemento 1";
    const div2 = div;   // NO se está haciendo una copia
    div2.textContent = "Elemento 2";
    div.textContent;  // 'Elemento 2'
    ```
     - Asi si se hace una copia
    ```
    const div = document.createElement("div");
    div.textContent = "Elemento 1";
    const div2 = div.cloneNode();   // Ahora SÍ estamos clonando
    div2.textContent = "Elemento 2";
    div.textContent;  // 'Elemento 1'
    ```
* isConnected	Indica si el nodo HTML está insertado en el documento HTML.

## Atributos HTML de un elemento:
```
const div = document.createElement("div"); // <div></div>
div.id = "page";          // <div id="page"></div>
div.className = "data";   // <div id="page" class="data"></div>
div.style = "color: red"; /
    
```

* hasAttributes() Indica si el elemento tiene atributos HTML.
* hasAttribute(attr)	Indica si el elemento tiene el atributo HTML attr. 
* getAttributeNames()	Devuelve un  con los atributos del elemento.
* getAttribute(attr)	Devuelve el valor del atributo attr del elemento o  si no existe.
* removeAttribute(attr)	Elimina el atributo attr del elemento.
* setAttribute(attr, value)	Añade o cambia el atributo attr al valor value.
* getAttributeNode(attr)	Idem a getAttribute() pero devuelve el atributo como nodo.
* removeAttributeNode(attr)	Idem a removeAttribute() pero devuelve el atributo como nodo.
* setAttributeNode(attr, value) Idem a setAttribute() pero devuelve el atributo como nodo.

```
// Obtenemos <div id="page" class="info data dark" data-number="5"></div>
const div = document.querySelector("#page");

div.hasAttribute("data-number");  // true (data-number existe)
div.hasAttributes();              // true (tiene 3 atributos)

div.getAttributeNames();          // ["id", "data-number", "class"]
div.getAttribute("id");           // "page"

div.removeAttribute("id");        // class="info data dark" y data-number="5"
div.setAttribute("id", "page");   // Vuelve a añadir id="page"
```
## Reemplazar contenido:

* .nodeName	Devuelve el nombre del nodo (etiqueta si es un elemento HTML). Sólo lectura.
* .textContent	Devuelve el contenido de texto del elemento. Se puede asignar para modificar.
```
const div = document.querySelector("div");  // <div></div>
div.textContent = "Hola a todos"; // <div>Hola a todos</div>
div.textContent;  // "Hola a todos"
```
* .innerHTML	Devuelve el contenido HTML del elemento. Se puede usar asignar para modificar.
    - Las propiedades .innerText y .outerText son propiedades no estándar de Internet Explorer. Se recomienda sólo utilizarlas con motivos de fallbacks o para dar soporte a versiones antiguas de Internet Explorer. En su lugar debería utilizarse .textContent.
```
const data = document.querySelector(".data");
data.innerHTML = "<h1>Tema 1</h1>";
data.textContent;   // "Tema 1"
data.innerHTML;     // "<h1>Tema 1</h1>"
data.outerHTML;     // "<div class="data"><h1>Tema 1</h1></div>"
```
* .outerHTML	Idem a .innerHTML pero incluyendo el HTML del propio elemento HTML.
* .innerText	Versión no estándar de .textContent de Internet Explorer con diferencias. Evitar.
* .outerText	Versión no estándar de .textContent/.outerHTML de Internet Explorer. Evitar.

## Insertar elementos:
* .appendChild(node)	Añade como hijo el nodo node. Devuelve el nodo insertado.
```
const img = document.createElement("img");
img.src = "https://lenguajejs.com/assets/logo.svg";
img.alt = "Logo Javascript";
document.body.appendChild(img);
```

```
const div = document.createElement("div");
div.textContent = "Esto es un div insertado con JS.";
const app = document.createElement("div"); // <div></div>
app.id = "app";       // <div id="app"></div>
app.appendChild(div); // <div id="app"><div>Esto es un div insertado con JS</div></div>
```
* .insertAdjacentElement(pos, elem)	Inserta el elemento elem en la posición pos. Si falla, .
* .insertAdjacentHTML(pos, str)	Inserta el código HTML str en la posición pos.
* .insertAdjacentText(pos, text)	Inserta el texto text en la posición pos.
    - beforebegin: El elemento se inserta antes de la etiqueta HTML de apertura.
    - afterbegin: El elemento se inserta dentro de la etiqueta HTML, antes de su primer hijo.
    - beforeend: El elemento se inserta dentro de la etiqueta HTML, después de su último hijo. Es el equivalente a usar el método .appendChild().
    - afterend: El elemento se inserta después de la etiqueta HTML de cierre.
```
const div = document.createElement("div");  // <div></div>
div.textContent = "Ejemplo";                // <div>Ejemplo</div>

const app = document.querySelector("#app"); // <div id="app">App</div>

app.insertAdjacentElement("beforebegin", div);
// Opción 1: <div>Ejemplo</div> <div id="app">App</div>

app.insertAdjacentElement("afterbegin", div);
// Opción 2: <div id="app"> <div>Ejemplo</div> App</div>

app.insertAdjacentElement("beforeend", div);
// Opción 3: <div id="app">App <div>Ejemplo</div> </div>

app.insertAdjacentElement("afterend", div);
// Opción 4: <div id="app">App</div> <div>Ejemplo</div>
```

```
app.insertAdjacentElement("beforebegin", div);
// Opción 1: <div>Ejemplo</div> <div id="app">App</div>

app.insertAdjacentHTML("beforebegin", '<p>Hola</p>');
// Opción 2: <p>Hola</p> <div id="app">App</div>

app.insertAdjacentText("beforebegin", "Hola a todos");
// Opción 3: Hola a todos <div id="app">App</div>
```

* .insertBefore(new, node)	Inserta el nodo new antes de node y como hijo del nodo actual.


## Eliminar elementos:
* Metodo remove
    - Probablemente, la forma más sencilla de eliminar nodos o elementos HTML es utilizando el método .remove() sobre el nodo o etiqueta a eliminar:
```
const div = document.querySelector(".deleteme");
div.isConnected;    // true
div.remove();
div.isConnected;    // false
```

* .removeChild(node)	Elimina y devuelve el nodo hijo node.
```
const div = document.querySelector(".item:nth-child(2)");   // <div class="item">2</div>
document.body.removeChild(div); // Desconecta el segundo .item
```
* .replaceChild(new, old)	Reemplaza el nodo hijo old por new. Devuelve old.

```
const div = document.querySelector(".item:nth-child(2)");
const newnode = document.createElement("div");
newnode.textContent = "DOS";
document.body.replaceChild(newnode, div);
```

## Gestión de CSS:
* .className	Acceso directo al valor del atributo HTML class. También se puede asignar.
    - La propiedad .className viene a ser la modalidad directa y rápida de utilizar el getter .getAttribute("class") y el setter .setAttribute("class", v). Veamos un ejemplo utilizando estas propiedades y métodos y su equivalencia:
```
const div = document.querySelector(".element");
// Obtener clases CSS
div.className;              // "element shine dark-theme"
div.getAttribute("class");  // "element shine dark-theme"

// Modificar clases CSS
div.className = "elemento brillo tema-oscuro";
div.setAttribute("class", "elemento brillo tema-oscuro");
```
* .classList	Objeto especial para manejar clases CSS. Contiene métodos y propiedades de ayuda.
    - .classList.length	Devuelve el número de clases del elemento HTML.
    - .classList.item(n)	Devuelve la clase número n del elemento HTML.  si no existe.
    - .classList.add(c1, c2, ...)	Añade las clases c1, c2... al elemento HTML.
    - .classList.remove(c1, c2, ...)	Elimina las clases c1, c2... del elemento HTML.
    - .classList.contains(clase)	Indica si la clase existe en el elemento HTML.
    - .classList.toggle(clase)	Si la clase no existe, la añade. Si no, la elimina.
    - .classList.toggle(clase, expr)	Si expr es true, añade clase. Si no, la elimina.
    - .classList.replace(old, new)	Reemplaza la clase old por la clase new.
* Acceder a clases CSS
```
const div = document.querySelector("#page");
div.classList;              // ["info", "data", "dark"] (DOMTokenList)
div.classList.length;       // 3
Array.from(div.classList)   // ["info", "data", "dark"] (Array)
[...div.classList];         // ["info", "data", "dark"] (Array)
div.classList.values;       // "info data dark" (String)
div.classList.item(0);      // "info"
div.classList.item(1);      // "data"
div.classList.item(3);      // null
```
* Añadir y eliinar clases css
```
const div = document.querySelector("#page");
div.classList.add("uno", "dos");    // No devuelve nada.
div.classList;  // ["info", "data", "dark", "uno", "dos"]
div.classList.remove("uno", "dos"); // No devuelve nada.
div.classList;  // ["info", "data", "dark"]
```
* Comprobar si existen clases css
```
const div = document.querySelector("#page");
div.classList;                      // ["info", "data", "dark"]
div.classList.contains("info");     // Devuelve `true` (existe esa clase)
div.classList.contains("warning");  // Devuelve `false` (no existe esa clase)
```
* Conmutar o alternar clases CSS 
```
const div = document.querySelector("#page");

div.classList; // ["info", "data", "dark"]

div.classList.toggle("info"); // Como "info" existe, lo elimina. Devuelve "false"
div.classList; // ["data", "dark"]

div.classList.toggle("info"); // Como "info" no existe, lo añade. Devuelve "true"
div.classList; // ["info", "data", "dark"]
```
*Reemplazar una clase CSS
```
const div = document.querySelector("#page");

div.classList; // ["info", "data", "dark"]

div.classList.replace("dark", "light");       // Devuelve `true` (se hizo el cambio)
div.classList.replace("warning", "error");    // Devuelve `false` (no existe la clase warning)
```
* Agregar estilos en un elemento

    - Estilos en línea
    ```
    const note = document.querySelector('.note');
    note.style.backgroundColor = 'yellow';
    note.style.color = 'red';
    ```
    - Usando la propiedad cssText
     ```
    note.style.cssText += 'color:red;background-color:yellow';
    note.style.cssText = 'color:red;background-color:yellow';
    ```
    - Usar una función de ayuda
    ```
    function css(element, style) {
        for (const property in style)
            element.style[property] = style[property];
    }
    ```

    ```
    const note = document.querySelector('.note');
    css(note, {
        'background-color': 'yellow',
        color: 'red'
    });
    ```
    - Estilos globales
    ```
   const style = document.createElement('style');
    style.innerHTML = `
      .note {
        background-color: yellow;
        color:red;
      }
    `;
    document.head.appendChild(style);
    ```

## Construido con 🛠️

* [lenguajejs](https://lenguajejs.com/javascript/dom/que-es/) - Toda la información

