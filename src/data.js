//------------------------------- FUNCIÓN EJEMPLO  LABORATORIA-------------------------------------------

export const example = () => {
  return 'example';
};

//---------------------- BUSCAR POR NOMBRE EN EL SEARCHER
export const findMeName = (userSearch, data, createCardsFunction) => {
  const fullName =  data.got.filter(character=>character.fullName=== userSearch ) 
  const idCharacter = fullName[0].id
  createCardsFunction (idCharacter, data.got)
}

//---------------------- BUSCAR POR TÍTULO EN EL SEARCHER
export const findMeTitle = (valor, data, functio) => {
  const title =  data.got.filter(personaje=>personaje.title=== valor )
  const idCharacterTitle = title[0].id
  functio (idCharacterTitle, data.got) 
}

//---------------------- BUSCAR POR FAMILIA EN EL SEARCHER
export const findFamily = (characters, userSearch) => {
  //lo que escriba el usuario en el html se filtra y se tranforma de mayuscula/minuscula 
  const search = characters.filter(members =>(members.family.toLowerCase().includes(userSearch.toLowerCase()))) 
  return search;
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
