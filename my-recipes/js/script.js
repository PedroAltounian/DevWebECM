console.log("JavaScript conectado!");

const nomeReceita = "Lasagne";

let username;

console.log(nomeReceita);

username = window.prompt("Qual é seu nome?")

console.log(username)

document.getElementById("botao").onclick = function(){
    document.getElementById("p1").textContent = "Hello, " + username + ", você gosta de lasanha?";
}