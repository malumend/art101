/*
  * Author: Maya Mendoza <malumend@ucsc.edu>
  * Created: 25 October
  * License: Public Domain
*/
//assign the output a variable

 var outputEl = document.getElementById("output");
console.log(outputEl);

// create a new element with document.createELement("p") and assign it to a variable
var new1El = document.createElement("p");

//Change the html of new1El
new1El.innerHTML = "Did you do it?";


//Make another new element and assign it to a variable new2El
var new2El = document.createElement("p");


//Change the html of new2El
new2El.innerHTML = "You really think I could.";

// Append child node to parent node
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// css change
new1El.style.fontSize = "20px";
new1El.style.color = "red";
new2El.style.color = "red";
outputEl.style.border = "dashed 5px blue";
