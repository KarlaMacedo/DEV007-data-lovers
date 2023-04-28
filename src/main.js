//------------------------IMPORTACION DE DATA--------------------------------------------------------------------
import data from "./data/got/got.js"

//------------------------FUNCIONALIDAD PARA PONER IMAGENES EN HTML DESDE LA DATA PARA EL SLIDER--------------------------------------------------------------------
function pushImgSlider (){ // Crea funcion que haga...
  const ulImages = document.querySelector(".gallery"); //Crear variable que seleccione el elemento del HTML que posteriormente va a guardar la lista de imagenes.
  for (let i=0; i<data.got.length; i++){ // For que recorre la cantidad de elementos en la data.
    const createLabelLi= document.createElement("li"); // Crea variable que va a almacenar la creacion de una etiqueta <li> en el Html.
    createLabelLi.innerHTML += `<img src= "${data.got[i].imageUrl}" alt= "image-character${data.got[i].fullName}" id ="${data.got[i].id}">` // Modifica el contenido interno de cada etiqueta <li> agregando una etiqueta img con los atributos obtenidos de la informacion de la data.
    ulImages.insertAdjacentElement("beforeend", createLabelLi); // Inserta en la etiqueta ul del Html antes de que termine (dentro) la etiqueta li creada que contiene la imagen con sus atributos.
  }
}
pushImgSlider()  //llamar a la funcion 


//------------------------FUNCIONALIDAD SLIDER--------------------------------------------------------------------
const gallery = document.querySelector(".gallery"); //crear variable que guarda la selección del elemento del html que contenga esa etiqueta. En este caso guarda la caja de la lista de las imágenes
const images = document.querySelectorAll("li") //crear variable que guarda la selección de todos los elementos del html que contengan esa etiqueta. En este caso guarda todas las imágenes
const width = 15; // ancho de las imágenes
const count = 1; // conteo de las imágenes visibles
let position = 0; // posición del desplazamiento del carrete
const botonPre = document.querySelector("#arrowPrev")  // crear variable que traiga a travez del ID la informacion del boton Previus
const botonNext = document.querySelector("#arrowNext") // crear variable que traiga a travez del ID la informacion del boton Next


botonPre.addEventListener("mouseover", previus) // A la variable BotonPre se le realizara un escuchador de "click" del boton Previus
//FUNCIÓN DEL BOTÓN PREVIO 
function previus() { //Declaracion de la funcion que hara posible ver las imagenes que estan mas a la izquierda.
  //DESPLAZAMIENTO IZQUIERDO
  position += (width * count);//a la posición al sumarle indica desplazamiento izquierdo de la galería una distancia equivalente a la cantidad de imágenes a mostrar por el tamaño del ancho de éstas
  //TOPE DEL VALOR DE LA POSICIÓN
  position = Math.min(position, 0);//con Math.min() se establece como valor límite mínimo de 0 a la posición, para no podernos mover demasiado a la izquierda,porque se acaban las imágenes
  //FUNCIÓN REAL AL DARLE CLICK
  gallery.style.marginLeft = position + 'em'; //al estilo css (.style) del margen izquierdo (.marginLeft) de la lista de las imagenes (gallery) se le da (=) el tamaño (px) del valor que tiene en ese momento la posición
}


botonNext.addEventListener("mouseover", next) // A la variable BotonNext se le realizara un escuchador de "click" del boton Next
//FUNCION DEL BOTON SIGUIENTE
function next() { //Declaracion de la funcion que hara posible ver las imagenes que estan mas a la derecha.
//DESPLAZAMIENTO DERECHO
  position -= (width * count); //a la posición al restarle indica desplazamiento derecho de la galería una distancia equivalente a la cantidad de imágenes a mostrar por el tamaño del ancho de éstas
  //TOPE DEL VALOR DE LA POSICIÓN
  position = Math.max(position, (-width) * (images.length - count));//con Math.max() se establece el valor límite máximo a la posición, que es (la longitud total de la cinta que tiene todas las imagenes menos las imagenes visibles) por el ancho de cada imágen en negativo porque se esta desplazando a la derecha
  //FUNCIÓN REAL AL DARLE CLICK
  gallery.style.marginLeft = position + 'em'; //al estilo css (.style) del margen izquierdo (.marginLeft) de la lista de las imagenes (gallery) se le da (=) el tamaño (px) del valor que tiene en ese momento la posición
}

//------------------------FUNCIÓN CREAR TARJETAS DE LA SECCIÓN DE PERSONAJES--------------------------------------------------------------------
function createCards (){
  const dataGOT = data.got;
  const div = document.getElementById('listCharacteres');
  for (let i=0; i<dataGOT.length; i++){
    const cards = document.createElement('li');
    cards.setAttribute('class', 'cardsCharacteres');
    cards.innerHTML +=
      `<div class="imageCard">                             
          <img src="${dataGOT[i].imageUrl}" alt="imageCharacter" id="imageCharacter" class="imageCharacter">
        </div>
        <div class = 'infoCards'> 
            <label id="nameCharcter" class="textInfoCards"><b>Name:</b> ${dataGOT[i].firstName} </label>
            <label id="nameCharcter" class="textInfoCards"><b>Last Name:</b> ${dataGOT[i].lastName} </label>
            <label id="tittleCharcter" class="textInfoCards"><b>Tittle:</b> ${dataGOT[i].title} </label>
            <label id="familyCharcter" class="textInfoCards"><b>Family:</b> ${dataGOT[i].family} </label>
            <label id="bornCharcter" class="textInfoCards"><b>Born:</b> ${dataGOT[i].born} </label>
        </div>`
    div.insertAdjacentElement("beforeend", cards);
  }
}
createCards()