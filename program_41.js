"use strict";
/*
* Magicians: Make a array of magician’s names.
* Pass the array to a function called show_magicians(),
* which prints the name of each magician in the array.
*/
const magicians = ["Harry Potter", "Dumbledore", "Snape", "Weasley"];
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(`- ${magician}`);
    }
}
console.log("Harry Potter Movie Magicians");
showMagicians(magicians);
