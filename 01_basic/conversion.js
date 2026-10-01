let number = "123abc"
 
// console.log(typeof number);

let newNumber = Number(number);
//console.log(typeof(newNumber));
// console.log(newNumber);

// 123abc = nan, type -> number
//123 = number,type ->number

// let Nullvalue = null;
let undefineValue = undefined;
console.log(undefineValue);

let conversionUndefine = Number(undefineValue);
console.log(typeof(conversionUndefine));
console.log(conversionUndefine);

// null => output-> 0, type ->number
// undefine => NaN,number