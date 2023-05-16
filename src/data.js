//_---------------------FUNCIÓN BUSCADOR------------------------------------------------------------------
export const findByValue = (userSearch, data) => {//declaración de la función y sus parámetros
  if (!userSearch) return ""; //condicional de que si la busqueda del usuario está vacía, retornar ""
  const name =  data.filter(personaje=>personaje.fullName === userSearch); //variable que almacena el filtro de la data por nombre completo de acuerdo a la busqueda del usuario
  const title =  data.filter(personaje=>personaje.title === userSearch);//variable que almacena el filtro de la data por titulo de acuerdo a la busqueda del usuario
  const family =  data.filter(members =>(members.family.toLowerCase().includes(userSearch.toLowerCase())));//variable que almacena el filtro de la data por familia de acuerdo a la busqueda del usuario (en este caso todo se convierte a minusculas para comparar la data y la busqueda sin que interfieran las mayúsulas y se busca que incluya lo que el usuario busca)
  
  if (name.length) { //si la variable del filtro de nombre tiene un lenght es porque el usuario buscó por nombre y entonces...
    return name[0].id; //retorna el id del elemento
  } else if (title.length) {//si la variable del filtro de titulo tiene un lenght es porque el usuario buscó por titulo y entonces...
    return title[0].id;//retorna el id del elemento
  } else if (family.length) {//si la variable del filtro de familia tiene un lenght es porque el usuario buscó por familia y entonces...
    return family;//retorna el array con los miembros de cada familia
  } else {//si no está vacía la busqueda y no tiene un lenght porque no era un elemento de la data...
    return false //retorna falso
  }
}

//---------------------- ORDENAR ALFABÉTICAMENTE LAS TARJETAS DE characterS CON EL SELECTOR
export const sortCharacters = (characters) => { //declaración de la función y sus parámetros, 
  const dataorder = characters.sort((a, b) => {// variable que almacena la función sort que nos ordena el array y lo devuelve ordenado 
    if (a.fullName < b.fullName) { //compara los parámetros a y b, si a es mayor 
      return -1; //retorna -1 por lo que pasa del lado izquierdo del array
    }
    if (a.fullName > b.fullName) {//compara los parámetros a y b, si a es menor 
      return 1;//retorna 1 por lo que pasa del lado derecho del array
    }
    return 0; //si no es mayor ni menor, por lo tanto son iguales los parámetro a y b, retorna 0, por lo que se quedan en el lugar donde están dentro del array
  });
  return dataorder; //la función, finalmente retorna a la variable que almacena el array ordenado
};

//---------------------- FILTRAR POR FAMILIA LAS TARJETAS DE CHARACTERS CON EL SELECTOR
export const houseFilterSelector = (characters, house) => { //declaración de la función y sus parámetros, 
  const filterResult = characters.filter(members => members.family === house); //variable que almacena el filtro de la data por familia de acuerdo a lo que seleccione el usuario
  return filterResult; //la función finalmente retorna el array con los miembros de la familia seleccionada
}

//---------------------- CONTAR MIEMBROS DE LA FAMILIA
export const familyMembersCounter = (members) => { //declaración de la función y sus parámetros, 
  const membersCounter = members.length; //variable que almacena el valor de la cantidad de elementos que tiene el array obtenido previamente para obtener los miembros de la familia seleccionada
  return membersCounter; //la función finalmente retorna la longitud del array de familia seleccionado 
}