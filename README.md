# Data Lovers - GOT

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Consideraciones generales](#3-consideraciones-generales)
* [4. Definición del producto](#4-definición-del-producto)
* [5. Organización del equipo](#5-organización-del-equipo)
* [6. Historias de usuario](#6-historias-de-usuario)
* [7. Diseño de la interfaz de usuario](#7-diseño-de-la-interfaz-de-usuario)
* [8. Checklist para la aceptación del proyecto](#8-checklist-para-la-aceptación-del-proyecto)
* [9. Objetivos de aprendizaje](#9-objetivos-de-aprendizaje)
* [10. Consideraciones técnicas](#10-consideraciones-técnicas)


***

## 1. Preámbulo

Según [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 millones de terabytes de datos, una cifra sin
precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

Este proyecto es parte del proceso de aprendizaje en el _bootcamp_ de _Laboratoria_, este proyetco es el segundo realizado.

## 2. Resumen del proyecto

El objetivo principal de este proyecto fue aprender a
diseñar y construir una interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita.

Como entregable final se requirió una página web que
permitiera **visualizar la data, filtrarla, ordenarla y proporcionara un cálculo con ella**.

## 3. Consideraciones generales

* Este proyecto se resolvió en duplas.
* El rango de tiempo estimado para completar el proyecto fue de 3 a 4 Sprints y se completó en 4.
* El proyecto se entregó en [GitHub](https://github.com/KarlaMacedo/DEV007-data-lovers) con la interfaz
 desplegada en [GitHub Pages](https://karlamacedo.github.io/DEV007-data-lovers/src/).

## 4. Definición del producto

Nuestro proyecto es una página dirigida a usuarios que son seguidores, fans o conocedores sobre la serie de Game of Thrones, de habla inglés.

![GOT](/src/Images/logo.png)

Los principales objetivos de nuestros usuarios al utilizar nuestra página es recordar y obtener información sobre cada personaje de la serie, las casas principales de la serie, obtener información general de la serie y tener un sitio en el cual pueden vincularse a sitios oficiales sobre ésta.

Por ello, nuestra página presenta:

* Imágenes alusivas a la serie que facilitan obtener información de los personajes.
* Buscador de personajes por nombre, título o familia.
* Sección con todas las tarjetas de los personajes que contienen información detallada de cada uno.
* Opción a ordenar alfabéticamente y al reverso a los personajes, para facilitar la búsqueda.
* Opción de filtrar las tarjetas por las principales casas, para facilitar la búsqueda.
* Sección de tarjetas de las casas principales de la serie con sus árboles genealógicos.
* Sección de información general de la serie y detalles sobre las temporadas.
* Links oficiales a redes sociales, páginas oficiales y podcast.

## 5. Organización del equipo

Como herramienta de organización utilizamos [Trello](https://trello.com/b/drAK4nu7/proyecto-2-data-lovers),
en donde hicimos toda la planeación de trabajo de 
cada sprint que duró este proyecto (4): 

![Trello](/src/Images/trello.png)

## 6. Historias de usuario

Para las historias de usuario nos basamos principalmente en las necesidades [compartidas por Laboratoria](https://github.com/KarlaMacedo/DEV007-data-lovers/tree/main/src/data/got) para los usuarios y las complementamos con los usuarios a los que consultamos o de los que recibimos feedback.

![Historias de usuarios](/src/Images/historiasUsuario.png)

## 7. Diseño de la interfaz de usuario

#### Prototipo de baja fidelidad

El prototipo de baja fidelidad fue elaborado en [Canva](https://www.canva.com/design/DAFgksNUpWI/2U0WwHGPfrEjos51_tKKAw/edit).

![Prototipo baja fidelidad](/src/Images/PrototipoBajaFidelidad.png)

#### Prototipo de alta fidelidad

El prototipo de alta fidelidad fue elaborado en [Figma](https://www.figma.com/file/8SE8Xa56eMUzPTWszaAcCp/DataLoversGOTLaboratoria?node-id=0-1&t=7ndOy0sk0oxsCGMI-0).

![Prototipo baja fidelidad](/src/Images/PrototipoAltaFidelidad.png)

#### Testeos de usabilidad

Durante el desarrollo de estre proyecto se hicieron _tests_ de usabilidad con
distintos usuarios los cuales nos brindaron _feedback_ sobre el diseño de 
nuestra página, en donde se pudo corregir:

* Colocar un scroll en el slider de imágenes para facilitar su manipulación
* Hacer interactivas las tarjetas de personajes
* Hacer interactivas los botones de la página
* Poner audio a la página
* Agregar un fondo a la página
* Recibir un _alert_ si no se busca nada o si se busca algo que no se encuentra
en la _datalist_
* Agregar más información a la página sobre la serie y no sólo usar la data

Por todo lo anterior, su buscó hacer las mejoras en nuestra página, quedándonos
como [prototipo final](https://www.figma.com/file/zRh3QfEI9iqhsDNwnvKby9/Actualizado?type=design&node-id=0-1&t=aGA9VyW87WozzGOg-0) lo siguiente:

![prototipo-actualizado](/src/Images/prototipoActualizado.png)

Y ya implementado todo en [nuestra página](https://karlamacedo.github.io/DEV007-data-lovers/src/), lo siguiente: 

![página-final](/src/Images/paginaFinal.png)

## 8. Checklist para la aceptación del proyecto

* [✓] Usa VanillaJS.
* [✓] Pasa linter (`npm run pretest`)
* [✓] Pasa tests (`npm test`)
* [✓] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [✓] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [✓] Incluye historias de usuario en `README.md`.
* [✓] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [✓] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [✓] Incluye link a Trello en `README.md`.
* [✓] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [✓] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [✓] UI: Permite ordenar data por uno o más campos (asc y desc).
* [✓] UI: Permite filtrar data en base a una condición.
* [✓] UI: Es _responsive_.
 

## 9. Objetivos de aprendizaje

### HTML

- [✓] **Uso de HTML semántico**

  <details><summary>Links</summary><p>

  * [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/02-html5/02-semantic-html)
  * [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [✓] **Uso de selectores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/01-css/01-intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
</p></details>

- [✓] **Modelo de caja (box model): borde, margen, padding**

  <details><summary>Links</summary><p>

  * [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/01-css/02-boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

- [✓] **Uso de flexbox en CSS**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [Flexbox Froggy](https://flexboxfroggy.com/#es)
  * [Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
</p></details>

### Web APIs

- [✓] **Uso de selectores del DOM**

  <details><summary>Links</summary><p>

  * [Manipulación del DOM](https://curriculum.laboratoria.la/es/topics/browser/02-dom/03-1-dom-methods-selection)
  * [Introducción al DOM - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Localizando elementos DOM usando selectores - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [✓] **Manejo de eventos del DOM (listeners, propagación, delegación)**

  <details><summary>Links</summary><p>

  * [Introducción a eventos - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener)
  * [El objeto Event](https://developer.mozilla.org/es/docs/Web/API/Event)
</p></details>

- [✓] **Manipulación dinámica del DOM**

  <details><summary>Links</summary><p>

  * [Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/es/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
</p></details>

### JavaScript

- [✓] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [✓] **Arrays (arreglos)**

  <details><summary>Links</summary><p>

  * [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/04-arrays)
  * [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  * [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  * [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  * [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  * [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  * [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
</p></details>

- [✓] **Objetos (key, value)**

  <details><summary>Links</summary><p>

  * [Objetos en JavaScript](https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects)
</p></details>

- [✓] **Variables (declaración, asignación, ámbito)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de datos y operadores](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/01-values-variables-and-types)
  * [Variables](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/02-variables)
</p></details>

- [✓] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops)
  * [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [✓] **Uso de bucles/ciclos (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Bucles (Loops)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/02-loops)
  * [Bucles e iteración - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [✓] **Funciones (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/03-functions)
  * [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow)
  * [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [✓] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

- [✓] **Módulos de ECMAScript (ES Modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [✓] **Uso de linter (ESLINT)**

- [✓] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [✓] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

### Control de Versiones (Git y GitHub)

- [✓] **Git: Instalación y configuración**

- [✓] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [✓] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [✓] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [✓] **GitHub: Despliegue con GitHub Pages**

  <details><summary>Links</summary><p>

  * [Sitio oficial de GitHub Pages](https://pages.github.com/)
</p></details>

- [✓] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

### Centrado en el usuario

- [✓] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [✓] **Seguir los principios básicos de diseño visual**

### Investigación

- [✓] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**

  <details><summary>Links</summary><p>

  * [Intro a testeos usabilidad](https://coda.io/@bootcamp-laboratoria/contenido-ux/test-de-usabilidad-15)
  * [Pruebas con Usuarios 1 — ¿Qué, cuándo y para qué testeamos?](https://eugeniacasabona.medium.com/pruebas-con-usuarios-1-qu%C3%A9-cu%C3%A1ndo-y-para-qu%C3%A9-testeamos-7c3a89b4b5e7)
</p></details>

## 10. Consideraciones técnicas

La lógica del proyecto se implementó completamente en
JavaScript (ES6), HTML y CSS. NO estuvo permitido usar
librerías o frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

El _boilerplate_ proporcionado contenía una estructura de
archivos como punto de partida así como toda la configuración de dependencias:

```text
.
├── EXTRA.md
├── README.md
├── package.json
├── src
|  ├── data (según con qué data trabajes)
|  |  ├── lol
|  |  |  ├── lol.js
|  |  |  ├── lol.json
|  |  |  └── README.md
|  |  ├── pokemon
|  |  |  ├── pokemon.js
|  |  |  ├── pokemon.json
|  |  |  └── README.md
|  |  └── rickandmorty
|  |  |  ├── rickandmorty.js
|  |  |  ├── rickandmorty.json
|  |  |  └── README.md
|  |  └── athletes
|  |  |  ├── athletes.js
|  |  |  ├── athletes.json
|  |  |  └── README.md
|  |  └── ghibli
|  |  |  ├── ghibli.js
|  |  |  ├── ghibli.json
|  |  |  └── README.md
|  ├── data.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.spec.js

directory: 7 file: 20
```

### `src/index.html`

Página que se muestra al usuario. También indica qué
scripts se usaron y se unió todo lo que se hizo.

### `src/main.js`

Código para mostrar los datos en la pantalla (interacción con el DOM, creación de nodos, registro de manejadores de
eventos).

### `src/data.js`

Toda la funcionalidad que corresponde a obtener, procesar y manipular datos. Funciones [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones son usadas desde el archivo `src/main.js`, al cargar la página, y cada vez que el usuario interactúa (click, filtrado, ordenado, ...).

### `src/data`

En esta carpeta están los datos de las diferentes fuentes. Hay una carpeta por cada fuente, y dentro de cada carpeta dos archivos: uno con la extensión `.js` y otro `.json`. Ambos archivos contienen la misma data.

### `test/data.spec.js`

Pruebas unitarias de las funciones implementadas en el archivo `data.js`.
