/*
  * Author: Maya Mendoza <malumend@ucsc.edu>
  * Created: 25 October
  * License: Public Domain
*/
// Borrow the nameSort() function or my anagram() function from Lab 7.
var nameSorted = nameArraySort.join('');
console.log("nameSorted=", nameSorted);
// Attach an event listener to your button that does the following:
                  // Gets the value of your input field
                  // Runs that value through your sort() or anagram() function
                  // and saves the results.
                  // Replaces the html in <div id=output> with the results.
var buttonEl = document.getElementById('my-button');
buttonEl.addEventListener('click', function(){
  alert("stop clicking me");
});
