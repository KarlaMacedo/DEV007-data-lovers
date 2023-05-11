//------------------------IMPORTACION DE DATA--------------------------------------------------------------------
import data from "./data/got/got.js"

//------------------------IMPORTACION DE FUNCIONES-------------------------------------------------------------------
import { sortCharacters, houseFilterSelector, familyMembersCounter, findByValue } from './data.js';

//------------------------FUNCIONALIDAD PARA PONER IMAGENES EN HTML DESDE LA DATA PARA EL SLIDER--------------------------------------------------------------------
function pushImgSlider() { // Crea funcion que haga...
  const ulImages = document.querySelector(".gallery"); //Crear variable que seleccione el elemento del HTML que posteriormente va a guardar la lista de imagenes.
  for (let i = 0; i < data.got.length; i++) { // For que recorre la cantidad de elementos en la data.
    const createLabelLi = document.createElement("li"); // Crea variable que va a almacenar la creacion de una etiqueta <li> en el Html.
    createLabelLi.id = "imgsCarousel"
    createLabelLi.innerHTML += `<img src= "${data.got[i].imageUrl}" alt= "image-character${data.got[i].fullName}" id ="${data.got[i].id}">` // Modifica el contenido interno de cada etiqueta <li> agregando una etiqueta img con los atributos obtenidos de la informacion de la data.
    ulImages.insertAdjacentElement("beforeend", createLabelLi); // Inserta en la etiqueta ul del Html antes de que termine (dentro) la etiqueta li creada que contiene la imagen con sus atributos.
  }
}
pushImgSlider()  //llamar a la funcion 

//------------------------FUNCIÓN PARA CREAR TARJETA EN DIÁLOGO MODAL--------------------------------------------
function openModal(index, data) {
  const divModal = document.querySelector("#divModal");//variable que almacena el contenedor que va a tener a la tarjeta del personaje
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
function hear() {//creamos la función llamada escuhar, porque está escuchando las acciones del usuario en el slider
  const audioCarousel = document.getElementById("sonidoCarousel") //crea una cosntante que almacena la etiqueta de audio del carrusel que está en el HTML
  const windowsModal = document.querySelector("#modal") //variable que almacena la etiqueta diálogo modal (ventanita que se abre al dar click en cada imagen del slider)
  const btnClose = document.querySelector("#btnCloseModal")//variable que almacena el boton de cerrar la ventana modal
  const imgCarousel = document.querySelectorAll("#imgsCarousel")//variable que almacena todas las imagenes del carrusel para después darles función al seleccionarlas
  for (let i = 0; i < imgCarousel.length; i++) {//For que recorre la cantidad de imagenes del carrusel
    imgCarousel[i].addEventListener("click", () => { windowsModal.showModal() })//escucha si la imagen está siendo seleccionada y si sí, abre la ventana modal
    imgCarousel[i].addEventListener("click", () => { openModal(i, data.got) })//escuha si la imagen está siendo seleccionada y si sí, llama a la función "openModal" y le entrega como argumento el índice de la imagen seleccionada
    imgCarousel[i].addEventListener("mouseover", () => audioCarousel.play()) //escucha el evento que cuando se coloque encima de las imágenes del carrusel el audio se reproduzca
  }
  btnClose.addEventListener("click", () => { windowsModal.close() })//escucha el evento de click del boton cerrar, para cerrar la ventana modal
}
hear()//llamar a la función

//------------------------FUNCIÓN CREAR TARJETAS DE MIEMBROS EN EL DIÁLOGO MODAL AL BUSCAR LA FAMILIA--------------------------------------------
const containerCardsResults = document.getElementById('divModal')//crea una constante que almacena el contenedor de las tarjetas de personajes que serán creadas con 
const createCardsResults = (arrayCharacters) => { //constante que tiene la función de crear tarjetas, se le da el parámetro del array que contiene a los personajes con sus propiedades
  containerCardsResults.innerHTML = "";
  arrayCharacters.forEach((arrayCharacters) => { //recorre cada elemento del array para...
    const card = document.createElement('li'); //crear una variable que almacene la creación de una etiqueta li en el html
    card.setAttribute('class', 'cardsCharacters'); //a esa etiqueta le da una clase
    card.innerHTML += // dentro de esa etiqueta concatena su contenido
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
    containerCardsResults.insertAdjacentElement("beforeend", card); // inserta cada creación de tarjeta después de la otra dentro del contenedor de las tarjetas
  });
}

//------------------------FUNCIONALIDAD BUSCADOR DE TARJETAS PERSONAJES AL BUSCAR EL NOMBRE, TÍTULO O FAMILIA--------------------------------------------
function dataListSearch() { //crear función que creará la datalist del buscador (opciones del buscador)
  const labelDataList = document.querySelector("datalist"); //variable que almacena la etiqueta datalist
  const dataList = [] // crea un array vacio que luego contendra la lista de las opciones creadas desde la data
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
    labelDataList.innerHTML += `<option value="${dataList[k]}"></option> ` /// le añade la etiqueta opcion por cada elemento del array dataList
  }
}
dataListSearch()

const inputSearch = document.getElementById("inputSearch") //variable que almacena el input del buscador
const buttonSearch = document.getElementById("buttonSearch") // variable que almacena el boton que le da funcionalidad al boton (lupa)
const windowsModal = document.querySelector("#modal") // variable que almacena el contenedor modal donde se crearan las tarjeta del resultado de busqueda.
const btnClose = document.querySelector("#btnCloseModal") // cariable que almacena el boton para cerrar el modal

/*
buttonSearch.addEventListener("click", ()=> { // escucha el evento de click del boton de buscar para que ....
  windowsModal.showModal() // se abra el modal
})
*/
btnClose.addEventListener("click", () => { windowsModal.close() }) //escucha el evento de click al boton de cerrar el modal y lo cierra si es clickeado

/*
buttonSearch.addEventListener("click", ()=> findMeName(inputSearch.value, data)) //escucha el evento de click del boton buscar y manda a llamar la funcion de encontrar el nombre que ingresamos en el input buscador y crea la tarjeta de ese personaje
buttonSearch.addEventListener("click", ()=> findMeTitle(inputSearch.value, data))//escucha el evento de click del boton buscar y manda a llamar la funcion de encontrar el titulo que ingresamos en el input buscador y crea la tarjeta del personaje que tenga ese titulo

buttonSearch.addEventListener("click", () => { //escucha el evento de click del boton buscar y manda a llamar la funcion de encontrar la familia que ingresamos en el input buscador y crea las tarjetas de los miembros
  const arrBuscador = findFamily(data.got, inputSearch.value); //varable que almacena el array que contiene el resultado de los miembros enontrados con esa familia
  createCardsResults(arrBuscador);
});
*/

buttonSearch.addEventListener("click", () => {
  const resultado = findByValue(inputSearch.value, data.got);

  if (resultado === "") {
    alert("Debe ingresar un criterio de busqueda")
  } else {
    if (resultado.length) {
      createCardsResults(resultado)
    } else {
      openModal(resultado, data.got)
    }
    windowsModal.showModal(); // se abra el modal
  }
})


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
const containerCards = document.getElementById('listCharacters')
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
  const newDataOrder = sortCharacters([...data.got]);
  containerCards.innerHTML = "";
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
  labelSelector.innerHTML = "This house has " + familyMembersCounter(houseFilterResult) + " members";
  containerCards.innerHTML = "";
  createCards(houseFilterResult);
  if (selectedHouse === "default") {
    createCards(data.got);
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
document.getElementById("buttonSeccionCharactersCards").addEventListener('click', function () {
  document.getElementById("home").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("seccionCharactersCards").style.display = "block";//display block muestra el elemento seleccionado por el id
  document.getElementById("housesSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("aboutSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("seasonsDetailsSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("buttonHomeSection").style.display = "block"//display block muestra el elemento seleccionado por el id
});

//-----------FUNCIÓN PARA CARGAR SÓLO LA SECCIÓN DE TARJETAS DE CASAS Y EL BOTON DE HOME CUANDO SELECCIONES ESE BOTON DEL MENÚ INICIAL-----------------------------------------
document.getElementById("buttonHousesSection").addEventListener('click', function () {
  document.getElementById("home").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("seccionCharactersCards").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("housesSection").style.display = "block";//display block muestra el elemento seleccionado por el id
  document.getElementById("aboutSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("seasonsDetailsSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("buttonHomeSection").style.display = "block"//display block muestra el elemento seleccionado por el id
});

//-----------FUNCIÓN PARA CARGAR SÓLO LA SECCIÓN DE ACERCA DE Y EL BOTON DE HOME CUANDO SELECCIONES ESE BOTON DEL MENÚ INICIAL-----------------------------------------
document.getElementById("buttonAboutSection").addEventListener('click', function () {
  document.getElementById("home").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("seccionCharactersCards").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("housesSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("aboutSection").style.display = "block";//display block muestra el elemento seleccionado por el id
  document.getElementById("seasonsDetailsSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("buttonHomeSection").style.display = "block"//display block muestra el elemento seleccionado por el id
});

//-----------FUNCIÓN PARA CARGAR SÓLO LA SECCIÓN DE DETALLES SOBRE LAS TEMPORADAS Y EL BOTON DE HOME CUANDO SELECCIONES EL LINK DE ABOUT-----------------------------------------
document.getElementById("buttonSeasonsDetailsSection").addEventListener('click', function () {
  document.getElementById("home").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("seccionCharactersCards").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("housesSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("aboutSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("seasonsDetailsSection").style.display = "block";//display block muestra el elemento seleccionado por el id
  document.getElementById("buttonHomeSection").style.display = "block"//display block muestra el elemento seleccionado por el id
});

//-----------FUNCIÓN PARA REGRESAR A HOME CUANDO SELECCIONES EL BOTON DE HOME-----------------------------------------
document.getElementById("buttonHome").addEventListener('click', function () {
  document.getElementById("home").style.display = "block";//display block muestra el elemento seleccionado por el id
  document.getElementById("seccionCharactersCards").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("housesSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("aboutSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("seasonsDetailsSection").style.display = "none";//display none oculta el elemento seleccionado por el id
  document.getElementById("buttonHomeSection").style.display = "none"//display none oculta el elemento seleccionado por el id
});
