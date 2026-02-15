import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who=["Mi mama ", "Mi perro ", "Mi hermano "];
  let action=["rompio ","mojo ","aplasto ","comio "];
  let what=["mi bolso ","mi tarea ","mi cuaderno "];
  let when=["mientras dormia.", "ayer cuando sali a pasear.", "mientras comia.", "cuando estaba en el gym."];

  let r1=Math.floor(Math.random()*who.length);
  let r2=Math.floor(Math.random()*action.length);
  let r3=Math.floor(Math.random()*what.length);
  let r4=Math.floor(Math.random()*when.length);
//revisa que es la funcion onload plis 

  document.querySelector("#excuse").innerHTML = who[r1] + action[r2] + what[r3] + when[r4];
};
