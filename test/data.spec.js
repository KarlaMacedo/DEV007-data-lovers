//------------------------IMPORTACION DE FUNCIONES-------------------------------------------------------------------
import { houseFilterSelector, familyMembersCounter, sortCharacters, findByValue} from '../src/data.js';

//------------------------IMPORTACION DE LA DATA-------------------------------------------------------------------
import data from '../src/data/got/got.js'

//------------------------FUNCIONALIDAD BUSCADOR-------------------------------------------------------------------
describe('findByValue', () => {
  it('findByValue should be a function', () => {//descripción del resultado que se espera de la función en cierta condición
    expect(typeof findByValue).toBe('function');// Test, primero se pone la condición a testear y luego lo que se espera de esta. typeof tipo de dato. toBE el dato primitivo debería de ser
  })

  it('Should return "" for an empty search', ()=>{//descripción del resultado que se espera de la función en cierta condición
    expect(findByValue('', data.got)).toBe('')// Test, primero se pone la condición a testear y luego lo que se espera de esta. typeof tipo de dato. toBE el dato primitivo debería de ser
  });

  it('Should return "0" for "Daenerys Targaryen"', () => {//descripción del resultado que se espera de la función en cierta condición
    expect(findByValue('Daenerys Targaryen', data.got)).toBe(0);// Test, primero se pone la condición a testear y luego lo que se espera de esta. typeof tipo de dato. toBE el dato primitivo debería de ser
  });

  it('Should return "5" for "Brandon Stark"', () => {//descripción del resultado que se espera de la función en cierta condición
    expect(findByValue('Brandon Stark', data.got)).toBe(5);// Test, primero se pone la condición a testear y luego lo que se espera de esta. typeof tipo de dato. toBE el dato primitivo debería de ser
  });

  it('Should return "41" for "Tywin Lannister"', () => {//descripción del resultado que se espera de la función en cierta condición
    expect(findByValue('Tywin Lannister', data.got)).toBe(41);// Test, primero se pone la condición a testear y luego lo que se espera de esta. typeof tipo de dato. toBE el dato primitivo debería de ser
  });

  it('Should return "3" for "No One"', () => {//descripción del resultado que se espera de la función en cierta condición
    expect(findByValue('No One', data.got)).toBe(3);// Test, primero se pone la condición a testear y luego lo que se espera de esta. typeof tipo de dato. toBE el dato primitivo debería de ser
  });

  it('Should return "0" for "Mother of Dragons"', () => {//descripción del resultado que se espera de la función en cierta condición
    expect(findByValue('Mother of Dragons', data.got)).toBe(0);// Test, primero se pone la condición a testear y luego lo que se espera de esta. typeof tipo de dato. toBE el dato primitivo debería de ser
  });

  it('Should return "14" for "Hand of the Queen"', () => {//descripción del resultado que se espera de la función en cierta condición
    expect(findByValue('Hand of the Queen', data.got)).toBe(14);// Test, primero se pone la condición a testear y luego lo que se espera de esta. typeof tipo de dato. toBE el dato primitivo debería de ser
  });

  it('Should return an "object" type for "Lannister"', () => {//descripción del resultado que se espera de la función en cierta condición
    expect(typeof(findByValue('Lannister', data.got))).toBe('object');// Test, primero se pone la condición a testear y luego lo que se espera de esta. typeof tipo de dato. toBE el dato primitivo debería de ser
  });

  it('Should return an array with length "4" for "Lannister"', () => {//descripción del resultado que se espera de la función en cierta condición
    expect(findByValue('Lannister', data.got).length).toBe(4);// Test, primero se pone la condición a testear y luego lo que se espera de esta. typeof tipo de dato. toBE el dato primitivo debería de ser
  });

  it('Should return an array with length "10" for  "Stark"', () => {//descripción del resultado que se espera de la función en cierta condición
    expect(findByValue('Stark', data.got).length).toBe(10);// Test, primero se pone la condición a testear y luego lo que se espera de esta. typeof tipo de dato. toBE el dato primitivo debería de ser
  });

  it('Should return false for "nothing"', () => {//descripción del resultado que se espera de la función en cierta condición
    expect(findByValue('nothing', data.got)).toBe(false);// Test, primero se pone la condición a testear y luego lo que se espera de esta. typeof tipo de dato. toBE el dato primitivo debería de ser
  });

  it('Should return false for "ania"', () => {//descripción del resultado que se espera de la función en cierta condición
    expect(findByValue('ania', data.got)).toBe(false);// Test, primero se pone la condición a testear y luego lo que se espera de esta. typeof tipo de dato. toBE el dato primitivo debería de ser
  });
});

//------------------------ORDEN ALFABÉTICO-------------------------------------------------------------------
describe('sortCharacters function returns alphabetically sorted character data', () => { //descripción de lo que hace la función testeada de manera general
  it('sortCharacters should be a function', () => { //descripción del resultado que se espera de la función en cierta condición
    expect(typeof sortCharacters).toBe('function');// Test, primero se pone la condición a testear y luego lo que se espera de esta. typeof tipo de dato. toBE el dato primitivo debería de ser
  });

  it('Arya Stark should be in the first position', () => {//descripción del resultado que se espera de la función en cierta condición
    expect((sortCharacters(data.got)[0].fullName)).toEqual('Arya Stark');// Test, primero se pone la condición a testear y luego lo que se espera de esta. toEqual la propiedad del objeto debería tener una igualdad profunda
  });

  it('If two elements of the array are equal, the array must be returned with the elements in the same original position', () => {//descripción del resultado que se espera de la función en cierta condición
    const arr = ["a", "a"]; //array ejemplo para testear la parte de la función en la que no mueve los elementos si son iguales
    expect(sortCharacters(arr)).toEqual(["a", "a"]);// Test, primero se pone la condición a testear y luego lo que se espera de esta. toEqual la propiedad del objeto debería tener una igualdad profunda
  });

  it('Ygritte should be in the last position', () => {//descripción del resultado que se espera de la función en cierta condición
    expect((sortCharacters(data.got)[51].fullName)).toEqual('Ygritte');// Test, primero se pone la condición a testear y luego lo que se espera de esta. toEqual la propiedad del objeto debería tener una igualdad profunda
  });
});

//------------------------CUENTA MIEMBROS DE FAMILIA-------------------------------------------------------------------
describe('familyMembersCounter returns the amount of house members obtained by the previous filter data', () => {//descripción de lo que hace la función testeada de manera general
  it('familyMembersCounter should be a function', () => {//descripción del resultado que se espera de la función en cierta condición
    expect(typeof familyMembersCounter).toBe('function'); // Test, primero se pone la condición a testear y luego lo que se espera de esta. typeof tipo de dato. toBE el dato primitivo debería de ser
  });

  it('Should return "4" members for house "Lannister"', () => {//descripción del resultado que se espera de la función en cierta condición
    expect(familyMembersCounter(houseFilterSelector(data.got, "Lannister"))).toBe(4);// Test, primero se pone la condición a testear y luego lo que se espera de esta. toBE el dato primitivo debería de ser
  });

  it('Should return "5" members for house "Baratheon"', () => {//descripción del resultado que se espera de la función en cierta condición
    expect(familyMembersCounter(houseFilterSelector(data.got, "Baratheon"))).toBe(5);// Test, primero se pone la condición a testear y luego lo que se espera de esta. toBE el dato primitivo debería de ser
  });
});

//------------------------FILTRO POR FAMILIA-------------------------------------------------------------------
describe('houseFilterSelector function returns the filter of the characters of the data by families', () => {//descripción de lo que hace la función testeada de manera general
  it('houseFilterSelector should be a function', () => {//descripción del resultado que se espera de la función en cierta condición
    expect(typeof houseFilterSelector).toBe('function');// Test, primero se pone la condición a testear y luego lo que se espera de esta. toBE el dato primitivo debería de ser
  });

  it('Should return an array of "1" element for the house "Tarly"', () => {//descripción del resultado que se espera de la función en cierta condición
    expect(houseFilterSelector(data.got, "Tarly")).toHaveLength(1);// Test, primero se pone la condición a testear y luego lo que se espera de esta. toHaveLength el objeto debería tener la longitud 
  });

  it('Should return an array of "10" elements for the house "Stark"', () => {//descripción del resultado que se espera de la función en cierta condición
    expect(houseFilterSelector(data.got, "Stark")).toHaveLength(10);// Test, primero se pone la condición a testear y luego lo que se espera de esta. toHaveLength el objeto debería tener la longitud 
  });

  it('Should return "Greyjoy" as the family of the first element of the returned array', () => {//descripción del resultado que se espera de la función en cierta condición
    expect((houseFilterSelector(data.got, "Greyjoy")[0].family)).toEqual('Greyjoy');// Test, primero se pone la condición a testear y luego lo que se espera de esta. toEqual la propiedad del objeto debería tener una igualdad profunda
  });

  it('Should return "Targaryen" as the family of the first element of the returned array', () => {//descripción del resultado que se espera de la función en cierta condición
    expect((houseFilterSelector(data.got, "Targaryen")[0].family)).toEqual('Targaryen');// Test, primero se pone la condición a testear y luego lo que se espera de esta. toEqual la propiedad del objeto debería tener una igualdad profunda
  });
});

