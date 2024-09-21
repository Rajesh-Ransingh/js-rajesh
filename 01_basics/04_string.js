const name = "Rajesh";
const repoCount = 50;

//console.log(name+repoCount+" Value");
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);
const gameName = new String("Rajesh");
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));
const newString = gameName.substring(0,4);
console.log(newString);
const newStringOne = "   Rajesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rajesh.com/rajesh%20ransingh";
console.log(url.replace("%20" , "_"));
console.log(url.includes("hitesh"));
