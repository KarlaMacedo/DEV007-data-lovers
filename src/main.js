//------------------------IMPORTACION DE DATA--------------------------------------------------------------------
//import data from "./data/got/got.js"

let data = [] //variable que almacenará la data
window.addEventListener('DOMContentLoaded', () => { //escucha el evento de cargar la pagina y haga...
  fetch("./data/got/got.json") //el fetch (traer la data.json)
    .then(response => response.json())//response convierte la data.json a un objeto .js
    .then(response => { //guarda el objeto .js
      data = response //le da el objeto .js a la variable creada inicialmente
      pushImgSlider(data); //llaman funciones que utilizan la data para la funcionalidad de la página
      hear(data);//llaman funciones que utilizan la data para la funcionalidad de la página
      dataListSearch(data);//llaman funciones que utilizan la data para la funcionalidad de la página
      createCards(data.got);//llaman funciones que utilizan la data para la funcionalidad de la página
    })
    .catch(error => { //guarda los errores que se pudieran presentar en la lectura del .json
      // Manejo de errores
      console.error('Error al cargar el archivo JSON:', error); //muestra los errores presentados en consola
    });
})

//------------------------IMPORTACION DE FUNCIONES-------------------------------------------------------------------
import { sortCharacters, houseFilterSelector, familyMembersCounter, findByValue } from "./data.js";

//------------------------FUNCIONALIDAD PARA PONER IMAGENES EN HTML DESDE LA DATA PARA EL SLIDER--------------------------------------------------------------------
function pushImgSlider(data) { // Crea funcion que haga...
  const ulImages = document.querySelector(".gallery"); //Crear variable que seleccione el elemento del HTML que posteriormente va a guardar la lista de imagenes.
  for (let i = 0; i < data.got.length; i++) { // For que recorre la cantidad de elementos en la data.
    const createLabelLi = document.createElement("li"); // Crea variable que va a almacenar la creacion de una etiqueta <li> en el Html.
    createLabelLi.setAttribute("class", "imgsCarousel"); //se les da una class
    createLabelLi.innerHTML += `<img src= "${data.got[i].imageUrl}" title="Click here for more details about ${data.got[i].fullName}"  alt= "image-character${data.got[i].fullName}" id ="${data.got[i].id}">` // Modifica el contenido interno de cada etiqueta <li> agregando una etiqueta img con los atributos obtenidos de la informacion de la data.
    ulImages.insertAdjacentElement("beforeend", createLabelLi); // Inserta en la etiqueta ul del Html antes de que termine (dentro) la etiqueta li creada que contiene la imagen con sus atributos.
  }
}
//pushImgSlider() //se llama a la función

//------------------------FUNCIÓN PARA CREAR TARJETA EN DIÁLOGO MODAL--------------------------------------------
function openModal(index, data) {
  const divModal = document.querySelector("#divModal");//variable que almacena el contenedor que va a tener a la tarjeta del personaje
  const labelModal = document.getElementById("labelCharactersCardsModal"); //variable que almacena la etiqueta que tendrá el mensaje de la contabilidad de miembros de cada familia
  divModal.innerHTML = ""; //limpia contenedor modal para colocar el nuevo resultado
  labelModal.innerHTML = ""; //limpia la etiqueta, para que no se quede pegada la contabilidad de miembros de familia que se genera en el buscador
  divModal.innerHTML = //ingresa al contenedor la tarjeta concatenada abajo, hecha con la info de la data y el estilo de las tarjetas de los personajes
    `<li class="cardsCharactersModal">
      <div class="containerImgModal">                        
        <img src="${data[index].imageUrl}" alt="imageCharacter" id="imageCharacter" class="imageCharacterModal">
      </div>
      <div class = "cardContentModal"> 
        <span class="cardTitleModal">${data[index].fullName}</span>
        <p class="cardDescriptionModal"><b>Name:</b> ${data[index].firstName} </p>
        <p class="cardDescriptionModal"><b>Last Name:</b> ${data[index].lastName} </p>
        <p class="cardDescriptionModal"><b>Title:</b> ${data[index].title} </p>
        <p class="cardDescriptionModal"><b>Family:</b> ${data[index].family} </p>
        <p class="cardDescriptionModal"><b>Born:</b> ${data[index].born} </p>
      </div>
    </li>`
}

//------------------------FUNCIÓN PARA ABRIR TARJETAS DEL DIÁLOGO MODAL AL APRETAR IMAGEN SLIDER--------------------------------------------
function hear(data) {//creamos la función llamada escuhar, porque está escuchando las acciones del usuario en el slider
  const audioCarousel = document.getElementById("sonidoCarousel") //crea una cosntante que almacena la etiqueta de audio del carrusel que está en el HTML
  const windowsModal = document.querySelector("#modal") //variable que almacena la etiqueta diálogo modal (ventanita que se abre al dar click en cada imagen del slider)
  const btnClose = document.querySelector("#btnCloseModal")//variable que almacena el boton de cerrar la ventana modal
  const imgCarousel = document.querySelectorAll(".imgsCarousel")//variable que almacena todas las imagenes del carrusel para después darles función al seleccionarlas
  for (let i = 0; i < imgCarousel.length; i++) {//For que recorre la cantidad de imagenes del carrusel
    imgCarousel[i].addEventListener("click", () => { windowsModal.showModal() })//escucha si la imagen está siendo seleccionada y si sí, abre la ventana modal
    imgCarousel[i].addEventListener("click", () => { openModal(i, data.got) })//escuha si la imagen está siendo seleccionada y si sí, llama a la función "openModal" y le entrega como argumento el índice de la imagen seleccionada
    imgCarousel[i].addEventListener("mouseover", () => audioCarousel.play()) //escucha el evento que cuando se coloque encima de las imágenes del carrusel el audio se reproduzca
  }
  btnClose.addEventListener("click", () => { windowsModal.close() })//escucha el evento de click del boton cerrar, para cerrar la ventana modal
}
//hear()//llamar a la función

//------------------------FUNCIÓN CREAR TARJETAS DE MIEMBROS EN EL DIÁLOGO MODAL AL BUSCAR LA FAMILIA--------------------------------------------
const containerCardsResults = document.getElementById("divModal")//crea una constante que almacena el contenedor de las tarjetas de personajes que serán creadas con 
const createCardsResults = (arrayCharacters) => { //constante que tiene la función de crear tarjetas, se le da el parámetro del array que contiene a los personajes con sus propiedades
  containerCardsResults.innerHTML = ""; //se limpia el contenido del contenedor para almacenar el nuevo resultado
  arrayCharacters.forEach((arrayCharacters) => { //recorre cada elemento del array para...
    const card = document.createElement("li"); //crear una variable que almacene la creación de una etiqueta li en el html
    card.setAttribute("class", "cardsCharacters"); //a esa etiqueta le da una clase
    card.innerHTML += // dentro de esa etiqueta concatena su contenido
      `<div class="containerImg">                          
        <img src="${arrayCharacters.imageUrl}" alt="imageCharacter" id="imageCharacter" class="imageCharacter">
      </div>
      <div class = "cardContent"> 
        <span class="cardTitle">${arrayCharacters.fullName}</span>
        <p class="cardDescription"><b>Name:</b> ${arrayCharacters.firstName} </p>
        <p class="cardDescription"><b>Last Name:</b> ${arrayCharacters.lastName} </p>
        <p class="cardDescription"><b>Title:</b> ${arrayCharacters.title} </p>
        <p class="cardDescription"><b>Family:</b> ${arrayCharacters.family} </p>
        <p class="cardDescription"><b>Born:</b> ${arrayCharacters.born} </p>
      </div>`;
    containerCardsResults.insertAdjacentElement("beforeend", card); // inserta cada creación de tarjeta después de la otra dentro del contenedor de las tarjetas
  });
}

//------------------------FUNCIONALIDAD CREAR DATALIST DE OPCIONES PARA EL BUSCADOR--------------------------------------------
function dataListSearch(data) { //crear función que creará la datalist del buscador (opciones del buscador)
  const labelDataList = document.querySelector("datalist"); //variable que almacena la etiqueta datalist del html
  const dataList = []; // crea un array vacio que luego contendra la lista de las opciones creadas desde la data
  for (let j = 0; j < data.got.length; j++) { //for que recorre la data ....
    if (dataList.indexOf(`${data.got[j].family}`) >= 0) { // if que revisa que no se repita el mismo nombre de familia y si se repite no lo crea
      dataList.push(data.got[j].fullName); // pone en el arreglo dataList cada nombre completo de personaje
      dataList.push(data.got[j].title) // pone en el arreglo dataList cadatitulo de personaje
    } else {  // sino existe aun el nombre de familia, lo crea
      dataList.push(data.got[j].fullName);  // pone en el arreglo dataList cada nombre completo de personaje
      dataList.push(data.got[j].title) // pone en el arreglo dataList cadatitulo de personaje
      dataList.push(data.got[j].family) // pone en el array dataList el nombre de la familia
    }
  }
  for (let k = 0; k < dataList.length; k++) {   // recorre el array dataList creado y .....
    labelDataList.innerHTML += `<option value="${dataList[k]}"></option> ` /// añade cada elemento como una etiqueta de opción dentro de la etiqueta datalist del html
  }
}
//dataListSearch()

//------------------------FUNCIONALIDAD BUSCADOR DE TARJETAS PERSONAJES AL BUSCAR EL NOMBRE, TÍTULO O FAMILIA--------------------------------------------
const inputSearch = document.getElementById("inputSearch") //variable que almacena el input del buscador
const buttonSearch = document.getElementById("buttonSearch") // variable que almacena el boton que le da funcionalidad al boton (lupa)
const windowsModal = document.querySelector("#modal") // variable que almacena el contenedor modal donde se crearan las tarjeta del resultado de busqueda.
const btnClose = document.querySelector("#btnCloseModal") // cariable que almacena el boton para cerrar el modal

btnClose.addEventListener("click", () => { windowsModal.close() }) //escucha el evento de click al boton de cerrar el modal y lo cierra si es clickeado

buttonSearch.addEventListener("click", () => { //escucha el evento click del botón del buscador para hacer la función...
  const result = findByValue(inputSearch.value, data.got); //crear una variable que almacene el resultado de llamar a la función encontrar valor mediante los parametros del valor de la busqueda del usuario y la data
  const labelModal = document.getElementById("labelCharactersCardsModal"); //variable que almacena la etiqueta que tendrá el mensaje de la contabilidad de miembros de cada familia
  if (result === "" || result === false) { //Si el resultado es vacio o es falso entonces...
    alert("Enter valid criteria search") // manda un alert diciendo que debe ingresar algo válido
  } else { //si no...
    if (result.length) { //si el resultado tiene un array con elementos...
      labelModal.innerHTML = "This house has " + familyMembersCounter(result) + " members"; //agrega la contabilidad de los miembros de cada familia buscada
      createCardsResults(result) //manda a llamar a la función de crear las tarjetas en el diálogo modal del array de los miembros de familia
    } else { //si no...
      labelModal.innerHTML = ""; //limpia el contenedor de las tarjetas de personajes para ingresar el nuevo resultado
      openModal(result, data.got) //manda a llamar a la función de crear tarjeta del personaje en el diálogo modal
    }
    windowsModal.showModal(); // abre el modal
  }
})

//------------------------FUNCIÓN CREAR TARJETAS DE LA SECCIÓN DE PERSONAJES--------------------------------------------
const containerCards = document.getElementById("listCharacters")//variable que almacena el contenedor de laa lista de las tarjetas (ul)
const createCards = (arrayCharacters) => { //variable que almacena la función de la iteración de la data para la creación de las tarjetas de personajes
  arrayCharacters.forEach((arrayCharacters) => { //ciclo que hace que una vez por cada elemento de la data haga...
    const card = document.createElement("li"); //una variable que almacena la creación de una etiqueta li en el html
    card.setAttribute("class", "cardsCharacters"); //se le agrega el atributo class a la etiqueta li creada
    card.innerHTML += //dentro de la etiqueta li se ingresa toda la información obtenida de la data para la creación de las tarjetas
      `<div class="containerImg">                          
        <img src="${arrayCharacters.imageUrl}" alt="imageCharacter" id="imageCharacter" class="imageCharacter">
        </div>
        <div class = "cardContent"> 
            <span class="cardTitle">${arrayCharacters.fullName}</span>
            <p class="cardDescription"><b>Name:</b> ${arrayCharacters.firstName} </p>
            <p class="cardDescription"><b>Last Name:</b> ${arrayCharacters.lastName} </p>
            <p class="cardDescription"><b>Title:</b> ${arrayCharacters.title} </p>
            <p class="cardDescription"><b>Family:</b> ${arrayCharacters.family} </p>
            <p class="cardDescription"><b>Born:</b> ${arrayCharacters.born} </p>
        </div>`
    containerCards.insertAdjacentElement("beforeend", card); //se insertan las tarjetas dentro del ul
  });
}
//createCards(data.got) //se llama a la función

//------------------------FUNCIONALIDAD SELECTOR ORDEN ALFABÉTICO-----------------------------------------
const alphabeticalSelector = document.getElementById("alphabeticalOrder"); //variable que almacena  el selector de orden alfabético
alphabeticalSelector.addEventListener("change", () => { //función que escucha el evento del cambio en el selector
  const opciones = alphabeticalSelector.value; //variable que almacena el valor escogido por el usuario en el select
  const newDataOrder = sortCharacters([...data.got]); //variable que almacena el resultado de el orden alfabético de la data  [...array] crea una copia del array de la data para no alterar la data original
  containerCards.innerHTML = ""; //se limpia el contenedor de las tarjetas para colocar el nuevo resultado
  if (opciones === "a-z") { //si el usuario elige la opción igual a-z
    createCards(newDataOrder); //crea las tarjetas con el array de la data ordenada alfabéticamente
  } else if (opciones === "z-a") { //si no, si el usuario elige la opción de la z-a
    createCards(newDataOrder.reverse()); //crea las tarjetas con el array de la data ordenada alfabéticamente al reverso
  }
});

//------------------------FUNCIONALIDAD SELECTOR FILTRO FAMILIA-----------------------------------------
const housesSelector = document.getElementById("familyFilter"); //variable que almacena  el selector de filtro por familia
const labelSelector = document.getElementById("labelCharactersCards"); //variable que almacena la etiqueta que tendrá el mensaje de la contabilidad de miembros de cada familia
housesSelector.addEventListener("change", () => { //función que escucha el evento del cambio en el selector
  const selectedHouse = housesSelector.value;//variable que almacena el valor escogido por el usuario en el select
  const houseFilterResult = houseFilterSelector(data.got, selectedHouse); //variable que almacena el array obtenido del filtro de la data por la familia seleccionada
  labelSelector.innerHTML = "This house has " + familyMembersCounter(houseFilterResult) + " members"; //se ingresa en la etiqueta la contabilidad de los miembros de la familia seleccionada
  containerCards.innerHTML = ""; //se limpia el contenedor de las tarjetas para ingresar el nuevo resultado
  createCards(houseFilterResult); //se manda a llamar la función de crear las tarjetas para el nuevo array obtenido del filtro de la familia seleccionada
  if (selectedHouse === "default") { //si el usuario elige la opción de default...
    createCards(data.got); //se crean las tarjetas de todos los personajes que hay en la data
  }
});

//------------------------FUNCIÓN PARA CARGAR AL INICIO SÓLO LA SECCIÓN DE HOME-----------------------------------------
//se debe poner esta función en específico al inicio para que se cargue inicialmente esto
function initialPage() {
  document.getElementById("home").style.display = "block"; //display block muestra el elemento seleccionado por el id
  document.getElementById("seccionCharactersCards").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("housesSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("aboutSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("seasonsDetailsSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("buttonHomeSection").style.display = "none"//display none oculta el elemento seleccionado por el id
}
initialPage()//llamar a la función

//-----------FUNCIÓN PARA CARGAR SÓLO LA SECCIÓN DE TARJETAS DE PERSONAJES Y EL BOTON DE HOME CUANDO SELECCIONES ESE BOTON DEL MENÚ INICIAL-----------------------------------------
document.getElementById("buttonSeccionCharactersCards").addEventListener("click", function () {
  document.getElementById("home").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("seccionCharactersCards").style.display = "block";//display block muestra el elemento seleccionado por el id
  document.getElementById("housesSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("aboutSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("seasonsDetailsSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("buttonHomeSection").style.display = "block"//display block muestra el elemento seleccionado por el id
});

//-----------FUNCIÓN PARA CARGAR SÓLO LA SECCIÓN DE TARJETAS DE CASAS Y EL BOTON DE HOME CUANDO SELECCIONES ESE BOTON DEL MENÚ INICIAL-----------------------------------------
document.getElementById("buttonHousesSection").addEventListener("click", function () {
  document.getElementById("home").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("seccionCharactersCards").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("housesSection").style.display = "block";//display block muestra el elemento seleccionado por el id
  document.getElementById("aboutSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("seasonsDetailsSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("buttonHomeSection").style.display = "block"//display block muestra el elemento seleccionado por el id
});

//-----------FUNCIÓN PARA CARGAR SÓLO LA SECCIÓN DE ACERCA DE Y EL BOTON DE HOME CUANDO SELECCIONES ESE BOTON DEL MENÚ INICIAL-----------------------------------------
document.getElementById("buttonAboutSection").addEventListener("click", function () {
  document.getElementById("home").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("seccionCharactersCards").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("housesSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("aboutSection").style.display = "block";//display block muestra el elemento seleccionado por el id
  document.getElementById("seasonsDetailsSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("buttonHomeSection").style.display = "block"//display block muestra el elemento seleccionado por el id
});

//-----------FUNCIÓN PARA CARGAR SÓLO LA SECCIÓN DE DETALLES SOBRE LAS TEMPORADAS Y EL BOTON DE HOME CUANDO SELECCIONES EL LINK DE ABOUT-----------------------------------------
document.getElementById("buttonSeasonsDetailsSection").addEventListener("click", function () {
  document.getElementById("home").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("seccionCharactersCards").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("housesSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("aboutSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("seasonsDetailsSection").style.display = "block";//display block muestra el elemento seleccionado por el id
  document.getElementById("buttonHomeSection").style.display = "block"//display block muestra el elemento seleccionado por el id
});

//-----------FUNCIÓN PARA REGRESAR A HOME CUANDO SELECCIONES EL BOTON DE HOME-----------------------------------------
document.getElementById("buttonHome").addEventListener("click", function () {
  document.getElementById("home").style.display = "block";//display block muestra el elemento seleccionado por el id
  document.getElementById("seccionCharactersCards").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("housesSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("aboutSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("seasonsDetailsSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("buttonHomeSection").style.display = "none"//display none oculta el elemento seleccionado por el id
});