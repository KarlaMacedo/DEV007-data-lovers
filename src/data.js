export const example = () => {
  return 'example';
};

//---------------------- BUSCAR POR NOMBRE EN EL SEARCHER
export const findMeName = (userSearch, data, createCardsFunction) => { // funcion que busca las concidencias del nombre ingresado en el input para crear la tarjeta con la informacion del personaje por id
  const fullName =  data.got.filter(character=>character.fullName=== userSearch ) //variable que contiene el resultado del filtro que se hace al buscar las coincidencias
  if (fullName.length){
    const idCharacter = fullName[0].id // variable que almacena el id del personaje encontrado como coincidencia
    createCardsFunction (idCharacter, data.got) // llama a la funcion de crear tarjeta dandole como parametro el id y la data
  }

}

//---------------------- BUSCAR POR TÍTULO EN EL SEARCHER
export const findMeTitle = (valor, data, functio) => {// funcion que busca las concidencias del titulo ingresado en el input para crear la tarjeta con la informacion del personaje por id
  const title =  data.got.filter(personaje=>personaje.title=== valor )//variable que contiene el resultado del filtro que se hace al buscar las coincidencias
  const idCharacterTitle = title[0].id// variable que almacena el id del personaje encontrado como coincidencia
  functio (idCharacterTitle, data.got) // llama a la funcion de crear tarjeta dandole como parametro el id y la data
}

//---------------------- BUSCAR POR FAMILIA EN EL SEARCHER
export const findFamily = (characters, userSearch) => { //fucnión que hace que lo que escriba el usuario en el html se filtre y se tranforma de mayuscula/minuscula 
  const search = characters.filter(members =>(members.family.toLowerCase().includes(userSearch.toLowerCase()))) 
  return search;
}

//_---------------------------------------------------------------------------------------
export const findByValue = (userSearch, data) => {
  if (!userSearch) return "";
  const name =  data.filter(personaje=>personaje.fullName === userSearch);
  const title =  data.filter(personaje=>personaje.title=== userSearch);
  const family =  data.filter(members =>(members.family.toLowerCase().includes(userSearch.toLowerCase())));
  
  if (name.length) {
    return name[0].id;
  } else if (title.length) {
    return title[0].id;
  } else if (family.length) {
    return family;
  }
}

//---------------------- ORDENAR ALFABÉTICAMENTE LAS TARJETAS DE characterS CON EL SELECTOR
export const sortCharacters = (characters) => { 
  //con esta función sort nos ordena el array y lo devuelve ordenado 
  const dataorder = characters.sort((a, b) => {
    if (a.fullName < b.fullName) {
      return -1;
    }
    if (a.fullName > b.fullName) {
      return 1;
    }
    return 0;
  });
  return dataorder; 
};

//---------------------- FILTRAR POR FAMILIA LAS TARJETAS DE CHARACTERS CON EL SELECTOR
export const houseFilterSelector = (characters, house) => { 
  const filterResult = characters.filter(members => members.family === house); 
  return filterResult; 
}

//---------------------- CONTAR MIEMBROS DE LA FAMILIA
export const familyMembersCounter = (members) => { 
  const membersCounter = members.length; 
  return membersCounter; 
}