

export const example = () => {
  return 'example';
};

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
