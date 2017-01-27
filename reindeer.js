// ## Instructions

// Your task is to loop through all the reindeer in the array, and add the name of the reindeer 
// to the single HTML `<div>` element provided. The name of the reindeer should be prepended 
// with the corresponding color from the other array.

// For example:

// * Blue Dasher
// * Red Dancer
// * etc...
// Paste the following code into your JavaScript file.

// ```
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");
// ```

for(i = 0; i < colors.length; i++){
	coloredReindeer = hohohoElement.innerHTML
	
}
// var fancyPoem = document.getElementById('sonnet');

// var sonnet = fancyPoem.innerHTML;

// console.log("indexOf", sonnet.indexOf("orphans"));
// console.log("length", sonnet.length);
// var winter = sonnet.replace("winter","yuletide");
// var large = winter.replace(/the/g,"a large");
// fancyPoem.innerHTML = large;