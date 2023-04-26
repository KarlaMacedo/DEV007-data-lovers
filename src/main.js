//-------------------------PROPORCIONADO POR LABORATORIA, SÓLO COMENTÉ TODO----------------------------------------
//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
//console.log(example, data);

//------------------------FUNCIONALIDAD SLIDER--------------------------------------------------------------------
const gallery = document.querySelector("ul"); //crear variable que guarda la selección del elemento del html que contenga esa etiqueta. En este caso guarda la caja de la lista de las imágenes
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