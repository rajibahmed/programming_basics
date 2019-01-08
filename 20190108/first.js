var a;
a = 10;

var b = 3;

// Arithmetic operator + - / *

console.log("sum ", a + b);
console.log("minus ", a - b);
console.log("divide ", a / b);
console.log("multiply ", a * b);
console.log("modulus ", a % b);

//odd 
var odd = 8;
if(1 == odd % 2 ) {
    console.log("this is odd number");
} else {
    console.log("this is even number");
}

//This is a array
//             0,     1,   2
var years = [ 2017, 2018, 2016, 111, 1121 ];

var summation = 0;
//for(var year of years) {
for(var i=0; i < years.length; i++) {
    var year = years[i];
    console.log(year);
    summation = summation + year;
}
console.log(summation);
