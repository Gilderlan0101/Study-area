
// Criando um objeto com um array
let obj = {
  var: "Text",
  array: [1, 2, 3, 4],
}

console.log(obj)
// typeof -> object
console.log(typeof(obj))


let frutas = []
frutas.push("banana", "maça", "uva")

// Consulta o tamanho do array
console.log(frutas.length)


// Adicinado novos valores no array
frutas[5] = "manga";
console.log(frutas[5]);
console.log(Object.keys(frutas));
console.log(frutas.length)


let newArray = Array.from({length: 4}, () => Array.from({length:frutas.length}, () => ""))
console.log(newArray)

const grid = [];
for (let x = 0; x < 5; x++) {

  const row = []
  for (let y = 0; y < 5; y++ ) {
    row.push(`y ${' '}`);
  }
  grid.push(`x ${row}`);
}
console.log(grid)

let ArrayOfNumber = [1, 2, 3, 4]
ArrayOfNumber.push(5);
console.log(ArrayOfNumber);


// Array interal (mais comum)
const jobs = ['padeiro', 'churasqueiro', 'programador'];
console.log(jobs);

// Construtor Array();
const numbers = new Array(1, true, undefined, {'user': 'gilderlan'});
console.log(numbers);

// Cria array com 5 slots vazios
const arrayvazio = new Array(5);
console.log(arrayvazio.length);

// Array.from() cria um array de interáveis
const deString = Array.from('JavaScript');
console.log(deString);

// Array.of() - Cria array dos argumentos
const arrayOf = Array.of(1, 2, 3, true, 'texto');
console.log(arrayOf)
