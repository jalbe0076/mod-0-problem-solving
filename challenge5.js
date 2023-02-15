/*
1. Start with an array of travel destinations. Print every travel destination in alphabetical order embedded in a sentence using string interpolation. 
For example, if the destination is "New York City", print something like "The next place I want to visit is New York City!" 

Define an array of destinations and order alphabetically, then using string interpolation print a sentence with the destination.

Data types: stings, arrays

breakdown
-define an array of strings
-create for loop to check all array elements
-order them alphabetically
-print the destination with a sentence using string interpolation
*/

var destination = ["Vancouver", "Sao Paulo", "Ponta Delgada", "White Horse", "Toronto", "Bishop"];
destination.sort();
for (var i = 0; i < destination.length; i++) {
    console.log(`The next place I want ot visit is ${destination[i]}!`);
}