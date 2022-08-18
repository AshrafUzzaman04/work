let num = 20;

num = toString(num);
console.log(typeof num);

// ---------------------------

let number = "555";

number = parseInt(number);
console.log(typeof number);

// ------------

number = "2.55";

number = parseFloat(number);
console.log(typeof number);

// -----Takes all the numbers after the decimal point-------

var n = 2.56789;
console.log(n.toFixed(3));

// -------take all the number------

var n2 = 5.23456;
console.log(n2.toPrecision(3));

// -------Convert from string to number-------

console.log(Number("2.5454"));
console.log(Number(true));
console.log(Number(false));
console.log(Number("5"));
