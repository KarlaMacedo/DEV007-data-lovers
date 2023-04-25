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
const count = 4; // conteo de las imágenes visibles
let position = 0; // posición del desplazamiento del carrete


//FUNCIÓN DEL BOTÓN PREVIO 
document.querySelector('#arrowPrev').onclick = function() { //selección del elemento del html que tenga ese id
  //DESPLAZAMIENTO IZQUIERDO
  position += (width * count);//a la posición al sumarle indica desplazamiento izquierdo de la galería una distancia equivalente a la cantidad de imágenes a mostrar por el tamaño del ancho de éstas
  //TOPE DEL VALOR DE LA POSICIÓN
  position = Math.min(position, 0);//con Math.min() se establece como valor límite mínimo de 0 a la posición, para no podernos mover demasiado a la izquierda,porque se acaban las imágenes
  //FUNCIÓN REAL AL DARLE CLICK
  gallery.style.marginLeft = position + 'em'; //al estilo css (.style) del margen izquierdo (.marginLeft) de la lista de las imagenes (gallery) se le da (=) el tamaño (px) del valor que tiene en ese momento la posición
};

//FUNCION DEL BOTON SIGUIENTE
document.querySelector('#arrowNext').onclick = function() { //selección del elemento del html que tenga ese id
//DESPLAZAMIENTO DERECHO
  position -= (width * count); //a la posición al restarle indica desplazamiento derecho de la galería una distancia equivalente a la cantidad de imágenes a mostrar por el tamaño del ancho de éstas
  //TOPE DEL VALOR DE LA POSICIÓN
  position = Math.max(position, (-width) * (images.length - count));//con Math.max() se establece el valor límite máximo a la posición, que es (la longitud total de la cinta que tiene todas las imagenes menos las imagenes visibles) por el ancho de cada imágen en negativo porque se esta desplazando a la derecha
  //FUNCIÓN REAL AL DARLE CLICK
  gallery.style.marginLeft = position + 'em'; //al estilo css (.style) del margen izquierdo (.marginLeft) de la lista de las imagenes (gallery) se le da (=) el tamaño (px) del valor que tiene en ese momento la posición
};