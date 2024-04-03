//desclarações de variaveis no JavaScript

var nome = "Lucas"; // não é recomendado usar var
let anoNascimento = 2006; // é recomendado usar let
const anoAtual = 2024;
  
console.log(nome);

// exemplos de leitura via console.log
console.log("Nome:" + nome);

console.log(anoNascimento);

console.log(anoAtual);

anoNascimento = 1994;
//anoAtual = 2025; // erro, pois não é possivel alterar o valor de uma constante

console.log(anoNascimento)
//exemplo de console.log com concatenação de variaveis
console.log("Meu nome é:" , nome , ", nasci em:" ,anoNascimento , " e estamos em:" , anoAtual);



// tipos de dados primitivos JavaScript
console.log("-----------------------------------------------------------")
console.log("Tipos de dados primitivos em JavaScript");

//string:
let veiculo = "Carro"; // com aspas duplas
let marca = 'Fiat'; // com aspas simples
let modelo = `Uno`; // com template literals (crase)

console.log( typeof veiculo);
console.log( typeof marca);
console.log( typeof modelo);

//exemplo de utilizaçao com template literals
console.log(`O ${veiculo} da marca ${marca} é o modelo ${modelo}`);


//number
console.log("-----------------------------------------------------------")
console.log("Tipo Number em JavaScript");

let numerPortasDoCarro = 4;
console.log( typeof numerPortasDoCarro);
console.log(typeof Infinity); // Infinity é um tipo de number
console.log(typeof -Infinity); // -Infinity é um tipo de number
console.log (typeof NaN); // NaN é um tipo de number ( para fazer contas com informações que não são numeros)


let anoFabricacao = 2020;
let preco = 45000.00;


//boolean
console.log("-----------------------------------------------------------")
console.log("Tipo boolean em JavaScript");

let carroNovo = true;
let carroUsado = false;

console.log( typeof carroNovo);
console.log( typeof carroUsado);

// empty values
console.log("-----------------------------------------------------------")
console.log("Empty values em JavaScript");

console.log("tipo null");
let testeNull = null;
console.log(testeNull);
console.log( typeof testeNull);


console.log("tipo undefined");
let testeUndefined;

console.log(testeUndefined);
console.log( typeof testeUndefined);

if (testeUndefined == undefined){
    console.log("teste com undefined");
} 
