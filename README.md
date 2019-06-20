# Data Lovers

## Índice

- [ïndice](#índice)
- [Preámbulo](#preámbulo)
- [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
- [Consideraciones generales](#consideraciones-generales)
- [Parte obligatoria](#parte-obligatoria)
- [Parte opcional](#parte-opcional-hacker-edition)
- [Consideraciones técnicas](#consideraciones-técnicas)
- [Primeros pasos](#primeros-pasos)
- [Contenido de referencia](#contenido-de-referencia)
- [Checklist](#checklist)

***

## Preámbulo

Según un [estudio de IBM](https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=WRL12345USEN),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 trillones de bytes de datos, una cifra sin precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

En la siguiente imagen, podrás ver cómo con la data que que se ve en la parte
izquierda se puede construir una interfaz amigable y entendible por el usuario
al lado derecho.

![json-interfaz](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

\* Puedes ver el detalle de la data en este [link](https://gist.github.com/lalogf/dd4aa3017a9f8aa8f90dfbca382c4dc9#file-student-json)
y la interfaz construida en este [link](https://app.talento.laboratoria.la/profile/HFOoMpOreBU2psCcjjLg5O2EWEv2).

## Objetivos de aprendizaje

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita a través de las historias de usuario.

Dicho en palabras sencillas, aprenderás a:

* Aplicar y profundizar todo lo que aprendiste en el proyecto anterior.
* Trabajar con **historias de usuario**, y crear en equipo las **definiciones de terminado (_definition of done_)*** y los **criterios de aceptación** en el proceso de organización y planificación del trabajo.
* Definir en equipo con que data van a trabajar.
* Crear productos que sigan los **principios básicos de diseño visual** y las **heurísticas de usabilidad**.
* Iterar el diseño del producto, basándote en los resultados de los **tests de usabilidad**.
* Manipular **_arreglos_ (_arrays_) y _objetos_ (_objects_)**.
* **Manipular el DOM** (agregar elementos dinámicamente basados en la data).
* **Manejar eventos del DOM** para permitir interacción con el usuario (filtrado, ordenado, ...).
* Entender los beneficios y complejidades de **trabajar en equipo** en un ambiente de alta incertidumbre.

## Consideraciones generales

- Este proyecto se debe resolver en duplas.
- Una integrante deberá _forkear_ y _clonar_ este repositorio; luego, su compañera, deberá _forkear_ y _clonar_ a la anterior.
- El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando [GitHub Pages](https://pages.github.com/).
- El tiempo sugerido para presentar este proyecto es de aproximadamente 3 semanas (3 sprints):

  | Tiempos      | Fechas |
  | :---------------: | :------------: |
  | **1er Sprint**    | 24/06 al 28/06 |
  | **2do Sprint**    | 01/07 al 05/07 |
  | **3er Sprint**    | 08/06 al 12/07 |
  
- Recuerda que en cada Sprint deberás realizar las siguientes actividades:
  - definir colaborativamente las _definiciones de terminado_ y _criterios de aceptación_ por cada historia de usuario a desarrollar en cada sprint.
  - _code review_
  - _peer feedback_
  - _retrospectiva_
  - _sprint planning_

- Antes de comenzar, conversen sobre cómo le fue a cada una en el proyecto anterior para que puedan entender mejor cómo organizarse. No caigan en el error de cada una hacer lo que ya sabe bien cómo hacer. Aprovechen la oportunidad de hacer lo que no saben bien. Acá estás para aprender, no para "entregar" proyectos solamente.

- Desarrollar una historia de usuario hasta completarla, es decir, que se cumplen **todos** sus _criterios de aceptación_ + **toda** su _definición de terminado_.

## Requerimientos del proyecto

Esta vez te proponemos una serie de datos de diferentes _temáticas_ para que
explores y decidas con cual trabajar. En cada una encontrarás las historias de usuario:

- [Indicadores de desarrollo del Banco Mundial](src/data/worldbank/)
  de algunos países (Brasil, Chile, México y Perú). Estos datos incluyen
  indicadores demográficos, económicos y comerciales. [Banco Mundial](https://www.bancomundial.org/)
- [Pokémon](src/data/pokemon/):
  En este set encontrarás una lista con los 151 Pokémon de la región de Kanto,
  junto con sus respectivas estadísticas usadas en el juego [Pokémon GO](pokemongolive.com).
- [Steam noticias](src/data/steam/):
  Lista noticias relacionadas a los videojuegos presentes en la
  plataforma de [Steam](https://store.steampowered.com/).
- [League of Legends - Challenger leaderboard](src/data/lol/):
  Este set de datos muestra la lista de jugadores en una liga del
  juego [League of Legends](https://play.lan.leagueoflegends.com/es_MX) (LoL), 
  puedes revisar la documentación de su API en este [link](https://developer.riotgames.com/api-methods/) 
- [Personas heridas por medio de transporte en EEUU](src/data/injuries/).
  Este set nos muestra el número de personas heridas en accidentes de
  transporte, con data anual desde 1960 y categorizada por tipo de transporte
  (aire, barco, automóvil, moto, bicicleta, ...) [Accidentes de transporte](http://www.paho.org/data/index.php/es/indicadores/107-cat-data-es/453-land-accidents-es.html?showall=&start=4)

### Planificación (Agile-Scrum)

En este proyecto te vamos a dar las historias de usuario los cuales representan los requerimientos y funcionales que desea el usuario final. Para ello, deberás incluir criterios de aceptación y definiciones de terminado específicos que permitan considerar a la historia de usuario desarrollada como válida y aceptada por el usuario.


Para realizar el seguimiento del desarrollo de las historias de usuario utilizarás [issues](https://help.github.com/en/articles/about-issues) y [project](https://help.github.com/en/articles/about-project-boards) en Github.
No dudes en solicitar ayuda a tus coaches.

### UX (Diseño de experiencia de usuario)

Antes de iniciar a codear, debes entender el problema que quieres solucionar 
y cómo tu aplicación lo soluciona.

- Primero trabaja tu prototipo de baja fidelidad con papel y lápiz (blanco y negro) para
la vista mobile y desktop.
- Luego valida esta solución con una compañera (pedir feedback).
- Toma lo aprendido al momento de validar tu primer prototipo y desarrolla un nuevo prototipo
de alta fidelidad usando [Figma](https://www.figma.com/) para la vista mobile y desktop. 
Recuerda utilizar la identidad gráfica correspondiente a la data que elijas.
- Deberás exportar tu diseño a [Zeplin](https://zeplin.io/) y utilizar las especificaciones de
estilo que te dé Zeplin al momento de implementar tus diseños en código.

`README.md`:
Debe contener lo siguiente:
- Un título con el nombre de tu proyecto.
- Un resumen de 1 o 2 líneas de qué se trata tu proyecto.
- La imagen final de tu proyecto.
- Investigación UX:
  - Explicar quiénes son los usuarios y los objetivos en relación con el producto.
  - Explicar cómo el producto soluciona los problemas/necesidades de dichos usuarios.
  - Luego colocarás la foto de tu primer prototipo de baja fidelidad (mobile y desktop) en papel.
  - Agregar un resumen del feedback recibido indicando las mejoras a realizar.
  - Imagen y link del prototipo de alta fidelidad final (mobile y desktop) en Figma.






### Front-end

#### Visualmente (HTML5 y CSS3)

Deberás maquetar de forma exacta el prototipo final que hiciste en Figma utilizando
HTML5 y CSS3. 

A continuación describimos los archivos que utilizarás:

**`src/index.html`**:

En este archivo va el contenido que se mostrará al usuario (esqueleto HTML). Encontrarás
3 etiquetas iniciales:

- `<header>`: encabezado de tu proyecto.
- `<main>`: contenido principal de tu proyecto.
- `<footer>`: pie de página de tu proyecto.

**`src/style.css`**:

Este archivo debe contener las reglas de estilo. Queremos que escribas tus propias reglas,
por eso NO está permitido el uso de frameworks de CSS3 (Bootstrap, materialize, etc).

#### Funcionalmente (JavaScript ES6 - pruebas unitarias)

- La lógica del proyecto debe estar implementada completamente en JavaScript (ES6).
- En este proyecto NO está permitido usar librerías o frameworks, sólo
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).
- No se debe utilizar la _pseudo-variable_ `this`.

Vamos a tener 2 archivos JavaScript separando responsabilidades, a continuación indicamos qué
harás en cada archivo:


### `src/main.js`

En este archivo escribirás todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.

### `src/data.js`

En este archivo escribirás todo el código que contenga las funcionalidades 
descritas en las historias de usuario. Estas funciones, que representan lo 
que el usuario quiere, deben ser [funciones puras]((https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d) e independientes del DOM.

### `src/data`

En esta carpeta están los datos de las diferentes fuentes. Encontrarás una
carpeta por cada fuente, y dentro de cada carpeta dos archivos: uno con la
extensión `.js` y otro `.json`. Ambos archivos contienen la misma data.
- Inicialmente solo usarás el `.js`, el cual se agrega a tu proyecto en el `html` 
mediante una etiqueta `<script>`.
- Cuando tu proyecto ya esté completado, en lugar de consumir la data estática 
en `js`, utilizarás la data de forma dinámica por medio del `.json`, la cual se 
realizará de forma asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)


**`test/cipher.spec.js`**:

En este archivo tendrás que completar las pruebas unitarias de las funciones
implementadas en `data.js` utilizando **Jest**.
Tus pruebas unitarias deben dar un 70% en _coverage_ (cobertura), _statements_ (sentencias),
_functions_ (funciones) y _lines_ (líneas); y un mínimo del 50% de _branches_ (ramas).




Te reomendamos que este archivo contenga toda la funcionalidad que corresponda
a obtener, procesar y manipular datos (tus funciones):

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.

Estos nombres de funciones y de parámetros son solamente referenciales, lo que
decidas depende de tu propia implementación.






### Historias de usuario

Una vez que entiendas las necesidades de tus usuarios, escribe las [Historias
de Usuario](https://es.wikipedia.org/wiki/Historias_de_usuario) que representen
todo lo que el usuario necesita hacer/ver. Las **Historias de Usuario** deben
ser el resultado de tu proceso de investigación o _research_ de tus usuarios.

Asegúrate de incluir la definición de terminado (_definition of done_) y los
Criterios de Aceptación para cada una.

En la medida de lo posible, termina una historia de usuario antes de pasar
a la siguiente (Cumple con Definición de Terminado + Criterios de Aceptación).




Features/características extra sugeridas:

* En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json` de
  de cada set datos.



### `src/index.html`

Como en el proyecto anterior, existe un archivo `index.html`. Como ya sabes,
acá va la página que se mostrará al usuario. También nos sirve para indicar
qué scripts se usarán y unir todo lo que hemos hecho.

En este archivo encontrarás una serie de _etiquetas_ (_tags_) `<script>`
_comentadas_. Para _cargar_ las diferentes fuentes de datos tendrás que
_descomentar_ estas _etiquetas_. Cada uno estos scripts asignará una variable
global con la data correspondiente a esa fuente de datos.

Por ejemplo, si "descomentamos" la siguiente línea:

```html
<!-- <script src="./data/worldbank/worldbank.js"></script> -->
```

La línea quedaría así:

```html
<script src="./data/worldbank/worldbank.js"></script>
```

Y ahora tendríamos la variable global `WORLDBANK` disponible en nuestros otros
scripts (como `src/data.js` o `src/main.js`).




### `test/data.spec.js`

Tendrás también que completar las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.


## Contenido de referencia

### Diseño de experiencia de usuario (User Experience Design)

* Investigación con usuarios / entrevistas
* Principios de diseño visual

### Desarrollo Front-end

* Unidad de testing en curso de JavaScript en LMS.
* Unidad de arreglos en curso de JavaScript en LMS.
* Unidad de objetos en curso de JavaScript en LMS.
* Unidad de funciones en curso de JavaScript en LMS.
* Unidad de DOM en curso de Browser JavaScript en LMS.
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-es.html)

### Herramientas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

### Organización del Trabajo:

* [Historias de Usuario](https://www.youtube.com/watch?v=ky6wFiF5vMk&t=344s). Ojo que Cris no diferencia _Definición de terminado_ de
_Criterios de Aceptación_ y nosotros sí lo haremos. Más detalles en la guía.
* [Cómo dividir H.U.](https://www.youtube.com/watch?v=Ueq786iZ30I&t=341s)
* [Guía para Data Lovers](https://docs.google.com/presentation/d/e/2PACX-1vQhx9D36NjpH-Daea-ITPUDUzNL8ZiNAprq_7b5PSUrfutk45tEtaOLz2lmd8f54_5jX1hypDM8f8SM/pub?start=false&loop=false&delayms=60000)

***


Como mínimo, tu implementación debe:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista, etc.
2. Permitir al usuario filtrar y ordenar la data.
3. Calcular estadísticas de la colección (o subcolección) como media aritmética,
   máximo y/o mínimo de algún atributo numérico, o contar cuántas veces aparece
   un determinado valor, por ejemplo.
4. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
tamaños de pantallas: móviles, tablets y desktops.

Es importante que tu interfaz, a pesar de ser una versión mínima de tu ideal,
siga los fundamentos de _visual design_.
