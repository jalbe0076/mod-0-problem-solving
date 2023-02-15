/*
Start with an array of strings. Print only the words that include the letter combination "ing".

Define an array of strings and print words that have "ing" in them.

Data types: stings, arrays

breakdown
-define an array of strings
-create for loop to check all array elements
-call a method to check the characters in the string
-print the words that contain "ing"
*/

var words = ["climbing", "retired", "griping", "flare", "draped"];
for (var i = 0; i < words.length; i++) {
    if (words[i].includes("ing") === true) {
        console.log(words[i]);
    }
}