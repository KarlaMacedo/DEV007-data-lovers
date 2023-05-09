//------------------------IMPORTACION DE DATA--------------------------------------------------------------------
import data from "./data/got/got.js"

//------------------------IMPORTACION DE FUNCIONES-------------------------------------------------------------------
import {findMeName, findMeTitle, findFamily, sortCharacters, houseFilterSelector, familyMembersCounter} from './data.js';

//------------------------FUNCIONALIDAD PARA PONER IMAGENES EN HTML DESDE LA DATA PARA EL SLIDER--------------------------------------------------------------------
function pushImgSlider (){ // Crea funcion que haga...
  const ulImages = document.querySelector(".gallery"); //Crear variable que seleccione el elemento del HTML que posteriormente va a guardar la lista de imagenes.
  for (let i=0; i<data.got.length; i++){ // For que recorre la cantidad de elementos en la data.
    const createLabelLi= document.createElement("li"); // Crea variable que va a almacenar la creacion de una etiqueta <li> en el Html.
    createLabelLi.id= "imgsCarousel" 
    createLabelLi.innerHTML += `<img src= "${data.got[i].imageUrl}" alt= "image-character${data.got[i].fullName}" id ="${data.got[i].id}">` // Modifica el contenido interno de cada etiqueta <li> agregando una etiqueta img con los atributos obtenidos de la informacion de la data.
    ulImages.insertAdjacentElement("beforeend", createLabelLi); // Inserta en la etiqueta ul del Html antes de que termine (dentro) la etiqueta li creada que contiene la imagen con sus atributos.
  }
}
pushImgSlider()  //llamar a la funcion 

//------------------------FUNCIONALIDAD SLIDER--------------------------------------------------------------------
/*const gallery = document.querySelector(".gallery"); //crear variable que guarda la selección del elemento del html que contenga esa etiqueta. En este caso guarda la caja de la lista de las imágenes
const images = document.querySelectorAll("li") //crear variable que guarda la selección de todos los elementos del html que contengan esa etiqueta. En este caso guarda todas las imágenes
const width = 180; // ancho de las imágenes
const count = 1; // conteo de las imágenes visibles
let position = 0; // posición del desplazamiento del carrete
const botonPre = document.querySelector("#arrowPrev")  // crear variable que traiga a travez del ID la informacion del boton Previus
const botonNext = document.querySelector("#arrowNext") // crear variable que traiga a travez del ID la informacion del boton Next

botonPre.addEventListener("click", previus) // A la variable BotonPre se le realizara un escuchador de "click" del boton Previus
//FUNCIÓN DEL BOTÓN PREVIO 
function previus() { //Declaracion de la funcion que hara posible ver las imagenes que estan mas a la izquierda.
  //DESPLAZAMIENTO IZQUIERDO
  position += (width * count);//a la posición al sumarle indica desplazamiento izquierdo de la galería una distancia equivalente a la cantidad de imágenes a mostrar por el tamaño del ancho de éstas
  //TOPE DEL VALOR DE LA POSICIÓN
  position = Math.min(position, 0);//con Math.min() se establece como valor límite mínimo de 0 a la posición, para no podernos mover demasiado a la izquierda,porque se acaban las imágenes
  //FUNCIÓN REAL AL DARLE CLICK
  gallery.style.marginLeft = position + 'px'; //al estilo css (.style) del margen izquierdo (.marginLeft) de la lista de las imagenes (gallery) se le da (=) el tamaño (px) del valor que tiene en ese momento la posición
}

botonNext.addEventListener("click", next) // A la variable BotonNext se le realizara un escuchador de "click" del boton Next
//FUNCION DEL BOTON SIGUIENTE
function next() { //Declaracion de la funcion que hara posible ver las imagenes que estan mas a la derecha.
//DESPLAZAMIENTO DERECHO
  position -= (width * count); //a la posición al restarle indica desplazamiento derecho de la galería una distancia equivalente a la cantidad de imágenes a mostrar por el tamaño del ancho de éstas
  //TOPE DEL VALOR DE LA POSICIÓN
  position = Math.max(position, (-width) * (images.length - count));//con Math.max() se establece el valor límite máximo a la posición, que es (la longitud total de la cinta que tiene todas las imagenes menos las imagenes visibles) por el ancho de cada imágen en negativo porque se esta desplazando a la derecha
  //FUNCIÓN REAL AL DARLE CLICK
  gallery.style.marginLeft = position + 'px'; //al estilo css (.style) del margen izquierdo (.marginLeft) de la lista de las imagenes (gallery) se le da (=) el tamaño (px) del valor que tiene en ese momento la posición
}*/

//------------------------FUNCIÓN PARA CREAR TARJETA EN DIÁLOGO MODAL--------------------------------------------
function openModal (index, data) {
  const divModal= document.querySelector("#divModal");//variable que almacena el contenedor que va a tener a la tarjeta del personaje
  divModal.innerHTML = //ingresa al contenedor la tarjeta concatenada abajo, hecha con la info de la data y el estilo de las tarjetas de los personajes
  `<li class="cardsCharactersModal"><div class="containerImgModal">                        
  <img src="${data[index].imageUrl}" alt="imageCharacter" id="imageCharacter" class="imageCharacterModal">
</div>
<div class = 'cardContentModal'> 
    <span class="cardTitleModal">${data[index].fullName}</span>
    <p class="cardDescriptionModal"><b>Name:</b> ${data[index].firstName} </p>
    <p class="cardDescriptionModal"><b>Last Name:</b> ${data[index].lastName} </p>
    <p class="cardDescriptionModal"><b>Tittle:</b> ${data[index].title} </p>
    <p class="cardDescriptionModal"><b>Family:</b> ${data[index].family} </p>
    <p class="cardDescriptionModal"><b>Born:</b> ${data[index].born} </p>
</div></li>`
}

//------------------------FUNCIÓN PARA ABRIR TARJETAS DEL DIÁLOGO MODAL AL APRETAR IMAGEN SLIDER--------------------------------------------
function hear(){//creamos la función llamada escuhar, porque está escuchando las acciones del usuario en el slider
  const audioCarousel = document.getElementById("sonidoCarousel")
  const windowsModal= document.querySelector("#modal") //variable que almacena la etiqueta diálogo modal (ventanita que se abre al dar click en cada imagen del slider)
  const btnClose= document.querySelector("#btnCloseModal")//variable que almacena el boton de cerrar la ventana modal
  const imgCarousel=document.querySelectorAll("#imgsCarousel")//variable que almacena todas las imagenes del carrusel para después darles función al seleccionarlas
  for(let i=0; i<imgCarousel.length; i++){//For que recorre la cantidad de imagenes del carrusel
    imgCarousel[i].addEventListener("click", ()=>{windowsModal.showModal()})//escucha si la imagen está siendo seleccionada y si sí, abre la ventana modal
    imgCarousel[i].addEventListener("click", ()=>{openModal(i, data.got)})//escuha si la imagen está siendo seleccionada y si sí, llama a la función "openModal" y le entrega como argumento el índice de la imagen seleccionada
    imgCarousel[i].addEventListener("mouseover", ()=> audioCarousel.play())
  }
  btnClose.addEventListener("click", ()=>{windowsModal.close()})//escucha el evento de click del boton cerrar, para cerrar la ventana modal
}
hear()//llamar a la función

//------------------------FUNCIÓN CREAR TARJETAS DE MIEMBROS EN EL DIÁLOGO MODAL AL BUSCAR LA FAMILIA--------------------------------------------
const containerCardsResults= document.getElementById('divModal')
const createCardsResults = (arrayCharacters) => {
  arrayCharacters.forEach((arrayCharacters) => {
    const card = document.createElement('li');
    card.setAttribute('class', 'cardsCharacters');
    card.innerHTML +=
    `<div class="containerImg">                          
    <img src="${arrayCharacters.imageUrl}" alt="imageCharacter" id="imageCharacter" class="imageCharacter">
  </div>
  <div class = 'cardContent'> 
      <span class="cardTitle">${arrayCharacters.fullName}</span>
      <p class="cardDescription"><b>Name:</b> ${arrayCharacters.firstName} </p>
      <p class="cardDescription"><b>Last Name:</b> ${arrayCharacters.lastName} </p>
      <p class="cardDescription"><b>Title:</b> ${arrayCharacters.title} </p>
      <p class="cardDescription"><b>Family:</b> ${arrayCharacters.family} </p>
      <p class="cardDescription"><b>Born:</b> ${arrayCharacters.born} </p>
  </div>`
    containerCardsResults.insertAdjacentElement("beforeend", card);
  });
}

//------------------------FUNCIONALIDAD BUSCADOR DE TARJETAS PERSONAJES AL BUSCAR EL NOMBRE, TÍTULO O FAMILIA--------------------------------------------
function dataListSearch() {
  const labelDataList = document.querySelector("datalist");
  const dataList = []
  for (let j = 0; j < data.got.length; j++) {
    if (dataList.indexOf(`${data.got[j].family}`) >= 0) {
      dataList.push(data.got[j].fullName);
      dataList.push(data.got[j].title)
    } else {
      dataList.push(data.got[j].fullName);
      dataList.push(data.got[j].title)
      dataList.push(data.got[j].family)
    }
  }
  for (let k = 0; k < dataList.length; k++) {
    labelDataList.innerHTML += `<option value="${dataList[k]}"></option> `
  }
}
dataListSearch()

const inputSearch = document.getElementById("inputSearch")
const buttonSearch= document.getElementById("buttonSearch")
const windowsModal= document.querySelector("#modal") 
const btnClose= document.querySelector("#btnCloseModal")

buttonSearch.addEventListener("click", ()=> {
  windowsModal.showModal()
})
btnClose.addEventListener("click", ()=>{windowsModal.close()})

buttonSearch.addEventListener("click", ()=> findMeName(inputSearch.value, data, openModal))
buttonSearch.addEventListener("click", ()=> findMeTitle(inputSearch.value, data, openModal))

buttonSearch.addEventListener("click", () => {
  const arrBuscador = findFamily(data.got, inputSearch.value);
  containerCardsResults.innerHTML = "";
  createCardsResults(arrBuscador);
});

//buttonSearch.addEventListener("click", ()=> findMe(inputSearch.value))

/*function findMe (valor){
  const family =  data.got.filter(personaje=>personaje.family === valor )
  const divSearcher= document.getElementById("findFamily")
  for (let i = 0; i < family.length; i++) {
    const cardsRelatives = document.createElement('li');
    cardsRelatives.setAttribute('class', 'cardsCharacters');
    cardsRelatives.innerHTML +=
      `<div class="containerImg">
        <img src="${family[i].imageUrl}" alt="imageCharacter" id="imageCharacter" class="imageCharacter">
      </div>
      <div class = 'cardContent'>
          <span class="cardTitle">${family[i].fullName}</span>
          <p id="nameCharcter" class="cardDescription"><b>Name:</b> ${family[i].firstName} </p>
          <p id="nameCharcter" class="cardDescription"><b>Last Name:</b> ${family[i].lastName} </p>
          <p id="tittleCharcter" class="cardDescription"><b>Title:</b> ${family[i].title} </p>
          <p id="familyCharcter" class="cardDescription"><b>Family:</b> ${family[i].family} </p>
          <p id="bornCharcter" class="cardDescription"><b>Born:</b> ${family[i].born} </p>
      </div>`
    divSearcher.insertAdjacentElement("beforeend", cardsRelatives);
  }
}*/
 
//------------------------FUNCIÓN CREAR TARJETAS DE LA SECCIÓN DE PERSONAJES--------------------------------------------
const containerCards= document.getElementById('listCharacters')
const createCards = (arrayCharacters) => {
  arrayCharacters.forEach((arrayCharacters) => {
    const card = document.createElement('li');
    card.setAttribute('class', 'cardsCharacters');
    card.innerHTML +=
    `<div class="containerImg">                          
    <img src="${arrayCharacters.imageUrl}" alt="imageCharacter" id="imageCharacter" class="imageCharacter">
  </div>
  <div class = 'cardContent'> 
      <span class="cardTitle">${arrayCharacters.fullName}</span>
      <p id="nameCharcter" class="cardDescription"><b>Name:</b> ${arrayCharacters.firstName} </p>
      <p id="nameCharcter" class="cardDescription"><b>Last Name:</b> ${arrayCharacters.lastName} </p>
      <p id="tittleCharcter" class="cardDescription"><b>Title:</b> ${arrayCharacters.title} </p>
      <p id="familyCharcter" class="cardDescription"><b>Family:</b> ${arrayCharacters.family} </p>
      <p id="bornCharcter" class="cardDescription"><b>Born:</b> ${arrayCharacters.born} </p>
  </div>`
    containerCards.insertAdjacentElement("beforeend", card);
  });
}
createCards(data.got)
//------------------------FUNCIONALIDAD SELECTOR ORDEN ALFABÉTICO-----------------------------------------
const alphabeticalSelector = document.getElementById("alphabeticalOrder");
alphabeticalSelector.addEventListener("change", () => {
  const opciones = alphabeticalSelector.value; //obtenemos el valor del select
  const newDataOrder = sortCharacters(data.got);
  containerCards.innerHTML ="";
  if (opciones === "a-z") {
    createCards(newDataOrder);
  } else if (opciones === "z-a") {
    createCards(newDataOrder.reverse());
  } 
});

//------------------------FUNCIONALIDAD SELECTOR FILTRO FAMILIA-----------------------------------------
const housesSelector = document.getElementById("familyFilter");
const labelSelector = document.getElementById("labelCharactersCards");
housesSelector.addEventListener("change", () => {
  const selectedHouse = housesSelector.value;
  const houseFilterResult = houseFilterSelector(data.got, selectedHouse);
  labelSelector.innerHTML ="This house has " + familyMembersCounter(houseFilterResult) + " members";
  containerCards.innerHTML ="";
  createCards(houseFilterResult);
  if (selectedHouse === "default") {
    createCards(data.got);
  }
});

//------------------------FUNCIÓN PARA CARGAR AL INICIO SÓLO LA SECCIÓN DE HOME-----------------------------------------
//se debe poner esta función en específico al inicio para que se cargue inicialmente esto
function initialPage () {
  document.getElementById("home").style.display="block"; //display block muestra el elemento seleccionado por el id
  document.getElementById("seccionCharactersCards").style.display="none";//display none oculta el elemento seleccionado por el id
  document.getElementById("housesSection").style.display="none";//display none oculta el elemento seleccionado por el id
  document.getElementById("aboutSection").style.display="none";//display none oculta el elemento seleccionado por el id
  document.getElementById("seasonsDetailsSection").style.display="none";//display none oculta el elemento seleccionado por el id
  document.getElementById("buttonHomeSection").style.display="none"//display none oculta el elemento seleccionado por el id
}
initialPage ()//llamar a la función

//-----------FUNCIÓN PARA CARGAR SÓLO LA SECCIÓN DE TARJETAS DE PERSONAJES Y EL BOTON DE HOME CUANDO SELECCIONES ESE BOTON DEL MENÚ INICIAL-----------------------------------------
document.getElementById("buttonSeccionCharactersCards").addEventListener('click', function() {
  document.getElementById("home").style.display="none";//display none oculta el elemento seleccionado por el id
  document.getElementById("seccionCharactersCards").style.display="block";//display block muestra el elemento seleccionado por el id
  document.getElementById("housesSection").style.display="none";//display none oculta el elemento seleccionado por el id
  document.getElementById("aboutSection").style.display="none";//display none oculta el elemento seleccionado por el id
  document.getElementById("seasonsDetailsSection").style.display="none";//display none oculta el elemento seleccionado por el id
  document.getElementById("buttonHomeSection").style.display="block"//display block muestra el elemento seleccionado por el id
});

//-----------FUNCIÓN PARA CARGAR SÓLO LA SECCIÓN DE TARJETAS DE CASAS Y EL BOTON DE HOME CUANDO SELECCIONES ESE BOTON DEL MENÚ INICIAL-----------------------------------------
document.getElementById("buttonHousesSection").addEventListener('click', function() {
  document.getElementById("home").style.display="none";//display none oculta el elemento seleccionado por el id
  document.getElementById("seccionCharactersCards").style.display="none";//display none oculta el elemento seleccionado por el id
  document.getElementById("housesSection").style.display="block";//display block muestra el elemento seleccionado por el id
  document.getElementById("aboutSection").style.display="none";//display none oculta el elemento seleccionado por el id
  document.getElementById("seasonsDetailsSection").style.display="none";//display none oculta el elemento seleccionado por el id
  document.getElementById("buttonHomeSection").style.display="block"//display block muestra el elemento seleccionado por el id
});

//-----------FUNCIÓN PARA CARGAR SÓLO LA SECCIÓN DE ACERCA DE Y EL BOTON DE HOME CUANDO SELECCIONES ESE BOTON DEL MENÚ INICIAL-----------------------------------------
document.getElementById("buttonAboutSection").addEventListener('click', function() {
  document.getElementById("home").style.display="none";//display none oculta el elemento seleccionado por el id
  document.getElementById("seccionCharactersCards").style.display="none";//display none oculta el elemento seleccionado por el id
  document.getElementById("housesSection").style.display="none";//display none oculta el elemento seleccionado por el id
  document.getElementById("aboutSection").style.display="block";//display block muestra el elemento seleccionado por el id
  document.getElementById("seasonsDetailsSection").style.display="none";//display none oculta el elemento seleccionado por el id
  document.getElementById("buttonHomeSection").style.display="block"//display block muestra el elemento seleccionado por el id
});

//-----------FUNCIÓN PARA CARGAR SÓLO LA SECCIÓN DE DETALLES SOBRE LAS TEMPORADAS Y EL BOTON DE HOME CUANDO SELECCIONES EL LINK DE ABOUT-----------------------------------------
document.getElementById("buttonSeasonsDetailsSection").addEventListener('click', function() {
  document.getElementById("home").style.display="none";//display none oculta el elemento seleccionado por el id
  document.getElementById("seccionCharactersCards").style.display="none";//display none oculta el elemento seleccionado por el id
  document.getElementById("housesSection").style.display="none";//display none oculta el elemento seleccionado por el id
  document.getElementById("aboutSection").style.display="none";//display none oculta el elemento seleccionado por el id
  document.getElementById("seasonsDetailsSection").style.display="block";//display block muestra el elemento seleccionado por el id
  document.getElementById("buttonHomeSection").style.display="block"//display block muestra el elemento seleccionado por el id
});

//-----------FUNCIÓN PARA REGRESAR A HOME CUANDO SELECCIONES EL BOTON DE HOME-----------------------------------------
document.getElementById("buttonHome").addEventListener('click', function() {
  document.getElementById("home").style.display="block";//display block muestra el elemento seleccionado por el id
  document.getElementById("seccionCharactersCards").style.display="none";//display none oculta el elemento seleccionado por el id
  document.getElementById("housesSection").style.display="none";//display none oculta el elemento seleccionado por el id
  document.getElementById("aboutSection").style.display="none";//display none oculta el elemento seleccionado por el id
  document.getElementById("seasonsDetailsSection").style.display="none";//display none oculta el elemento seleccionado por el id
  document.getElementById("buttonHomeSection").style.display="none"//display none oculta el elemento seleccionado por el id
});
