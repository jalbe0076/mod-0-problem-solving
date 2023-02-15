/*
Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.

Define an array of strings with mixed upper and lower case letters and print all the words in lowercase

Data types: stings, arrays

breakdown
-define an array of strings with upper and lower case letters
-create for loop to check all array elements
-call a method to cahnge all characters to lowercase.
-print the words in lowercase
*/

var words = ["fAll", "CliMbiNG", "caMS", "Trad", "cRACK", "OnPOINT"];
for (var i = 0; i < words.length; i++) {
    console.log(words[i].toLowerCase());
}