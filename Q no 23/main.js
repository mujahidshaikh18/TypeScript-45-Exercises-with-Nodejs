"use strict";
let car = "toyota";
//Test fer equality and unequality with string
console.log("Is car equal to toyota?");
console.log(car == "toyota"); //equality
console.log("Is car not equal to toyota?");
console.log(car != "toyota"); //unequality
// Test using lowercase function
let upperCase = "TOYOTA";
console.log("\nIs TOYOTA equal to toyota after converting to lowercase?");
console.log(upperCase.toLowerCase() == "toyota");
console.log("\nIs TOYOTA not equal to toyota after converting to lowercase?");
console.log(upperCase.toLowerCase() != "toyota");
//numerical tests
let ten = 10;
let twenty = 20;
//equal to
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);
//not equal to
console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);
//greater than
console.log("\n Is ten greater than to zero?");
console.log(ten > 0);
//less than
console.log("\n Is twenty less than to 10?");
console.log(twenty < 10);
//greater than or equal to
console.log("\n Is ten greater than or equal to 5?");
console.log(ten >= 5);
//less than or equal to
console.log("\n Is twenty less than or equal to 10?");
console.log(twenty <= 10);
//test using "and" and "or" operators
//using and(&&)
console.log("\n Is twenty not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 10); //true
console.log("\n Is twenty not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 30); //false
//using or (||)
console.log("\n Is twenty greater than 50 or 20 is equal to 20?");
console.log(20 > 10 || 20 == 20); //true
console.log("\n Is twenty greater than 50 or 20 is not equal to 20?");
console.log(20 > 50 || 20 != 20); //false
//Test whether an item is include in array
let fruits = ["apple", "banana", "orange", "mango"];
console.log("\n Is orange include in my fruits array?");
console.log(fruits.includes("orange"));
// not include
console.log("\n Is orange not include in my fruits array?");
console.log(!fruits.includes("orange"));
