/*
Given an array of strings, return only the words that begin with the letter "t".

Define an array of strings and return only the words that begin with "t".

Data types: stings, arrays

breakdown
-define an array of strings
-create function to return values
-create for loop to check all array elements
-call a method to check the first character in the string
-print the words that start with t
*/

var animals = ["turtle", "snake", "hippo", "tiger", "lizard"];
function getWordsStartT() {
    var wordsT = "";
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].charAt() === "t") {
            wordsT += animals[i] + " ";
        }
    }
    return wordsT;
}
console.log(getWordsStartT());