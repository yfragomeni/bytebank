import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";


const cliente1 = new Cliente("Ricardo", 11122233309);

// Construtor não deixa atribuir novamente o atributo
const cliente2 = new Cliente("Alice", 88822233309);

// reserva o espaço, mas não coloca nada. O null é explicito, 
//      o undefined provavelmente esqueceram.
const conta2 = new ContaCorrente(cliente2, 1001);

console.log(conta2);
console.log(cliente2);
// Acessando atributo estático
console.log(ContaCorrente.numeroDeContas);