// Declaração de função
function showMessage() {
  console.log("Hello everyone!");
}


// chamando função criada
showMessage();
showMessage();

// Variáveis exteriores
// Uma função pode acessar uma Variáveis externa.
let username = "john";

function welcome() {
  
  let message = `Hello ${username}`;
  return message;
  
    
}

// podemos executar uma function dentro de um console.log
// desde que a function retorne algo.
console.log(welcome());


// mais exemplos:
let fullName = "Gilderlan silva da cruz";

function helloUser() {
  
  fullName = "Maria santos";
  
  let message = `Hello ${fullName}`;

  return message;
}

console.log(fullName); // Gilderlan silva da cruz
console.log(helloUser()); // Maria santos

// Parametros
function products(name, price) {
  
    console.log(`${name}: ${price}`);

}

products("Laranja", 4.33);

function foo(from, text) {
  
  from = "*" + from + "*";

  console.log(`${from}: ${text}`);
  
}

let from = "Ann";
foo(from, "Hello");
console.log(from)

function valueDefault(first_name, last_name = "Silva") {

  console.log(`${first_name} ${last_name}`);

}

valueDefault("Ana", undefined); // usando valor default
valueDefault("Gilderlan", "santos") // usando valor passad

function anotherFunction() {
  return "White"

}

// Podemos usar uma outra function como valor default.
function colorCar(model, cor = anotherFunction()) {
  
  let mycar = `modelo: ${model} cor: ${cor}`;
  console.log(mycar);
}


colorCar("Hb20");


function soma(value_1, value_2, value_3){
  
  return (
    (value_1 + value_2) * value_3
  )
  
}

console.log(soma(10,10,30))



function showPrimes(n) {

    for (let i = 2; i < n; i++) {
      if (!isprime(i)) continue;
      return i
    }
}



function isprime(n) {
    for (let i = 2; i < n; i++) {
      if ( n % i === 0 ) return false;
    }
    return true;
}

console.log(showPrimes(5));
console.log(isprime(1));

function checkAge(age){
  
  if (age < 18){
    console.log("Hello baby, you it authorization?");
  }
  else {
    
    console.log("Released");
  }

}

checkAge(21);
checkAge(12);

function checkAge2(age){
  
  let message =  age >= 18 ? "authorization" : "Not authorization"
  return message
}

console.log(checkAge2(121));

// Função que retorna o menor número
function min(a, b) {

  if (a < b){
    return a
  } else{
    return b
  }

}
console.log(min(50, 40));


// Função simplificada
function returnMinNumber(a, b) {
  let minNumber = Math.min(a, b)
  return minNumber
}

console.log(returnMinNumber(10, 20));


