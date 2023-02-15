/*
1. Given a sentence with only lowercase letters, print the same sentence with the first letter of every word capitalized. 
For example, if you were given "Turing is the best", return "Turing Is The Best" instead!

Define a string variable as a sentence and capitalise the first letter of every word

Data types: stings, arrays

breakdown
-define a strings varible
-convert sentence to an array
-create a function to return the new sentence
-create for loop to check all array elements
-change the first character to uppercase
-print the modified sentense
*/

var sentence = "turing is the best";
var words = sentence.split(" ");
function capWords() {
    var newSentence = ``
    for (var i = 0; i < words.length; i++) {
        var newWords = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        newSentence += newWords + " ";
    }
    return newSentence;
}
console.log(capWords());