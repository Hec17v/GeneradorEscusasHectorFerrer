

window.onload = function() {

 const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const action = ['ate', 'peed', 'crushed', 'broke'];
const what = ['my homework', 'my phone', 'the car'];
const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

const quien = who[Math.floor(Math.random()*who.length)];
const accion = action[Math.floor(Math.random()*action.length)];
const que = what[Math.floor(Math.random()*what.length)];
const cuando = when[Math.floor(Math.random()*when.length)];


document.getElementById("excu").innerHTML = quien + " " + accion + " " +  que + " " + cuando;
  console.log("Hello Rigo from the console!");
};
