/*
* Author: Maya Mendoza <malumend@ucsc.edu>
* Created: 27 October
* License: Public Domain
*/

function sortingHat(str){
  let 1 = str.length;
  let mod = 1 % 4;
  if (mod == 0){
    return "Gryffinder";
  }
  else if (mod === 1){
    return "Ravenclaw";
  }
  else if (mod === 2){
    return "Slytherin";
  }
  else if (mod === 3){
    return "Hufflepuff";
  }
}

let myButton = $("#button");
myButton.click(function(){
  let name = $("#input").val();
  let house = sortingHat(name);
  let newText = "<p>The Sorting has has placed you into " + house + "</p>";
  $("#output").html(newText);
});
