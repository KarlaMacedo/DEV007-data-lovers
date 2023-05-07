//------------------------IMPORTACION DE DATA--------------------------------------------------------------------
import data from "./data/got/got.js"

//------------------------IMPORTACION DE FUNCIONES-------------------------------------------------------------------
import {findMeName, findMeTitle} from './data.js';

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
const gallery = document.querySelector(".gallery"); //crear variable que guarda la selección del elemento del html que contenga esa etiqueta. En este caso guarda la caja de la lista de las imágenes
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
}

//------------------------FUNCIÓN PARA CREAR TARJETA EN DIÁLOGO MODAL--------------------------------------------
function openModal (index, data) {
  const divModal= document.querySelector("#divModal");//variable que almacena el contenedor que va a tener a la tarjeta del personaje
  divModal.innerHTML = //ingresa al contenedor la tarjeta concatenada abajo, hecha con la info de la data y el estilo de las tarjetas de los personajes
  `<li class="cardsCharactersModal"><div class="containerImgModal">                        
  <img src="${data[index].imageUrl}" alt="imageCharacter" id="imageCharacter" class="imageCharacterModal">
</div>
<div class = 'cardContentModal'> 
    <span class="cardTitleModal">${data[index].fullName}</span>
    <p id="nameCharcter" class="cardDescriptionModal"><b>Name:</b> ${data[index].firstName} </p>
    <p id="nameCharcter" class="cardDescriptionModal"><b>Last Name:</b> ${data[index].lastName} </p>
    <p id="tittleCharcter" class="cardDescriptionModal"><b>Tittle:</b> ${data[index].title} </p>
    <p id="familyCharcter" class="cardDescriptionModal"><b>Family:</b> ${data[index].family} </p>
    <p id="bornCharcter" class="cardDescriptionModal"><b>Born:</b> ${data[index].born} </p>
</div></li>`
}

//------------------------FUNCIÓN PARA ABRIR TARJETAS DEL DIÁLOGO MODAL AL APRETAR IMAGEN SLIDER--------------------------------------------
function hear(){//creamos la función llamada escuhar, porque está escuchando las acciones del usuario en el slider
  const windowsModal= document.querySelector("#modal") //variable que almacena la etiqueta diálogo modal (ventanita que se abre al dar click en cada imagen del slider)
  const btnClose= document.querySelector("#btnCloseModal")//variable que almacena el boton de cerrar la ventana modal
  const imgCarousel=document.querySelectorAll("#imgsCarousel")//variable que almacena todas las imagenes del carrusel para después darles función al seleccionarlas
  for(let i=0; i<imgCarousel.length; i++){//For que recorre la cantidad de imagenes del carrusel
    imgCarousel[i].addEventListener("click", ()=>{windowsModal.showModal()})//escucha si la imagen está siendo seleccionada y si sí, abre la ventana modal
    imgCarousel[i].addEventListener("click", ()=>{openModal(i, data.got)})//escuha si la imagen está siendo seleccionada y si sí, llama a la función "openModal" y le entrega como argumento el índice de la imagen seleccionada
  }
  btnClose.addEventListener("click", ()=>{windowsModal.close()})//escucha el evento de click del boton cerrar, para cerrar la ventana modal
}
hear()//llamar a la función

//------------------------FUNCIONALIDAD BUSCADOR DE TARJETAS INDIVIDUALES PERSONAJES AL BUSCAR EL NOMBRE Y EL TÍTULO--------------------------------------------
function dataListSearch(){
  const labelDataList= document.querySelector("datalist");
  const dataList = []
  for (let j = 0; j < data.got.length; j++) {
    dataList.push(data.got[j].fullName);
    dataList.push(data.got[j].title)
    dataList.push(data.got[j].family)
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
btnClose.addEventListener("click", ()=>{windowsModal.close()})
buttonSearch.addEventListener("click", ()=> findMeName(inputSearch.value, data, openModal))
buttonSearch.addEventListener("click", ()=> findMeTitle(inputSearch.value, data, openModal))
buttonSearch.addEventListener("click", ()=> {windowsModal.showModal()})

  
//------------------------FUNCIÓN CREAR TARJETAS DE LA SECCIÓN DE PERSONAJES--------------------------------------------
function createCards (){ //Declaracion de la funcion que creará las tarjetas de personajes en automático con la info de la data
  const dataGOT = data.got; //variable que almacena la data
  const div = document.getElementById('listCharacters'); //variable que almacena la ul donde se pondrán la lista de tarjetas de personajes
  for (let i=0; i<dataGOT.length; i++){// For que recorre la cantidad de elementos en la data.
    const cards = document.createElement('li'); // Crea variable que va a almacenar la creacion de una etiqueta <li> en el Html.
    cards.setAttribute('class', 'cardsCharacters'); //agrega atributo class a la etiqueta li, para darle estilo con css
    cards.setAttribute("id", data.got[i].fullName);
    cards.innerHTML += // Modifica el contenido interno de cada etiqueta <li> agregando lo concatenado en las backthicks (contenedro de la imagen del personaje y conteneder con la info del personaje, todo se extrae de la data)
      `<div class="containerImg">                          
        <img src="${dataGOT[i].imageUrl}" alt="imageCharacter" id="imageCharacter" class="imageCharacter">
      </div>
      <div class = 'cardContent'> 
          <span class="cardTitle">${dataGOT[i].fullName}</span>
          <p id="nameCharcter" class="cardDescription"><b>Name:</b> ${dataGOT[i].firstName} </p>
          <p id="nameCharcter" class="cardDescription"><b>Last Name:</b> ${dataGOT[i].lastName} </p>
          <p id="tittleCharcter" class="cardDescription"><b>Title:</b> ${dataGOT[i].title} </p>
          <p id="familyCharcter" class="cardDescription"><b>Family:</b> ${dataGOT[i].family} </p>
          <p id="bornCharcter" class="cardDescription"><b>Born:</b> ${dataGOT[i].born} </p>
      </div>`
    div.insertAdjacentElement("beforeend", cards); // Inserta en la etiqueta ul del Html antes de que termine (dentro) las etiquetas li creadas que contienen las tarjetas de los personajes
  }
}
createCards()//llama a la función

//------------------------FUNCIÓN PARA ABRIR TARJETAS AL APRETAR NOMBRES DE LAS TARJETAS DE CASAS-----------------------------------------
function hearHouse(){//creamos la función llamada escuhar, porque está escuchando las acciones del usuario en el slider
  const windowsModalHouses= document.querySelector("#modalHouses") //variable que almacena la etiqueta diálogo modal (ventanita que se abre al dar click en cada imagen del slider)
  const btnClose= document.querySelector("#btnCloseModalHouses")//variable que almacena el boton de cerrar la ventana modal
  const names=document.querySelectorAll(".nameCharacterHouses")//variable que almacena todas las imagenes del carrusel para después darles función al seleccionarlas
  for(let i=0; i<names.length; i++){//For que recorre la cantidad de imagenes del carrusel
    names[i].addEventListener("click", ()=>{windowsModalHouses.showModal()})//escucha si la imagen está siendo seleccionada y si sí, abre la ventana modal
    names[i].addEventListener("click", ()=>{openModal(names[i].value)})//escuha si la imagen está siendo seleccionada y si sí, llama a la función "openModal" y le entrega como argumento el índice de la imagen seleccionada
  }
  
  function openModal(value){//creamos la función con el parámetro del índice de la imágen del carrusel
    const divModal= document.querySelector("#divModalHouses");//variable que almacena el contenedor que va a tener a la tarjeta del personaje
    for (let i=0; i<data.got.length; i++){
      if (value === data.got.fullName){
        divModal.innerHTML = //ingresa al contenedor la tarjeta concatenada abajo, hecha con la info de la data y el estilo de las tarjetas de los personajes
    `<li class="cardsCharactersModal"><div class="containerImgModal">                        
    <img src="${data.got[value].imageUrl}" alt="imageCharacter" id="imageCharacter" class="imageCharacterModal">
  </div>
  <div class = 'cardContentModal'> 
      <span class="cardTitleModal">${data.got[value].fullName}</span>
      <p id="nameCharcter" class="cardDescriptionModal"><b>Name:</b> ${data.got[value].firstName} </p>
      <p id="nameCharcter" class="cardDescriptionModal"><b>Last Name:</b> ${data.got[value].lastName} </p>
      <p id="tittleCharcter" class="cardDescriptionModal"><b>Tittle:</b> ${data.got[value].title} </p>
      <p id="familyCharcter" class="cardDescriptionModal"><b>Family:</b> ${data.got[value].family} </p>
      <p id="bornCharcter" class="cardDescriptionModal"><b>Born:</b> ${data.got[value].born} </p>
  </div></li>`
      }}}
  btnClose.addEventListener("click", ()=>{windowsModalHouses.close()})//escucha el evento de click del boton cerrar, para cerrar la ventana modal
}
hearHouse()//llamar a la función

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
