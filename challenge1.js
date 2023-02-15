/*
Given an array of strings, return only the strings that have exactly 4 characters.

Define an array of strings and return the strings with 4 characters

Data types: stings, arrays

breakdown
-define an array of strings
-create for loop to check all array elements
-create conditional statement to confirm if the string contains 4 characters
-return strings that were true
*/

var strings = ["ball", "park", "dig", "shovel", "grass", "roll"];
for (var i = 0; i < strings.length; i++) {
    if (strings[i].length === 4) {
        console.log(strings[i]);
    }
}