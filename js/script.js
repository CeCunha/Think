

let lista = ["camada"];



const element = document.getElementById("btn");
element.addEventListener("click",myFunction);

function myFunction() {

var char1 = document.getElementById("char1").value;
var char2 = document.getElementById("char2").value;
var char3 = document.getElementById("char3").value;
var char4 = document.getElementById("char4").value;
var char5 = document.getElementById("char5").value;
var char6 = document.getElementById("char6").value;

var word = char1 + char2 + char3 + char4 + char5+ char6;  document.getElementById("p").textContent = word;


var indiceAleatorio = Math.floor(Math.random() * lista.length);

var palavraAleatorio = lista[indiceAleatorio];

var caracteres = palavraAleatorio.split("");

var res1 = document.getElementById('h1').textContent = caracteres[0];
var res2 = document.getElementById('h2').textContent = caracteres[1];
var res3 = document.getElementById('h3').textContent = caracteres[2];
var res4 = document.getElementById('h4').textContent = caracteres[3];
var res5 = document.getElementById('h5').textContent = caracteres[4];
var res6 = document.getElementById('h6').textContent = caracteres[5];

if(char1 == res1){
    document.getElementById('h1').style.color = "red";
}





}