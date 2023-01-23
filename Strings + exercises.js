const prompt=require("prompt-sync")({sigint:true})


//String Concatenation//
 var message = "Hello";
var name = "Shoaib";

console.log(message + " " + name);
console.log(name.length);


//String length and retrieving number of characters//
var message = prompt("Compose your message: ");
var messageCount = message.length;
console.log('You have written ' + messageCount + " characters, you have " +(140 - messageCount) + " characters remaining.");


//Slicing and extracting parts of a string
let name1 = "Shoaib"
let result = name1.slice(1, 3);
console.log(result);

//Changing casing in text
var name2 = "Shoaib"
name2 = name2.toUpperCase();
name2 = name2.toLowerCase();
/*Note: name2 has been turned into lowercase as this is the final
line of code.*/
console.log(name2);


