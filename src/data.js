// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};


//AQUI IRAN LAS FUNCIONES DE SORTDATA (ordenar por nacimiento tipo línea del tiempo) Y FILTERDATA (filtrar por familia para las tarjetas de familia)


// BUSCAR POR NOMBRE EN EL SEARCHER
export const findMeName = (valor, data, functio) => {
  const fullName =  data.got.filter(personaje=>personaje.fullName=== valor ) 
  const idCharacter = fullName[0].id
  functio (idCharacter, data.got)
}

// BUSCAR POR NOMBRE EN EL SEARCHER
export const findMeTitle = (valor, data, functio) => {
  const title =  data.got.filter(personaje=>personaje.title=== valor )
  const idCharacterTitle = title[0].id
  functio (idCharacterTitle, data.got) 
}
