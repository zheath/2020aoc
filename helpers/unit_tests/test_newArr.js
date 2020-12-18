const newArr = require("../newArr");

const a1 = newArr(5,1);
const a2 = newArr(5,2);
console.log(a1);
a1[3] = 99;
console.log(a1);

/*** broken - each vector's elements are updated simultaneously ***/
const test2d = newArr(5, newArr(5, 3));
console.log(test2d);
test2d[0][0] = 8;
test2d[1][3] = 8;
console.log(test2d);

const test2d2 = newArr(5, null).map(el => newArr(5, 0));
const test2d2copy = [...test2d2];
console.log(test2d2);
console.log(test2d2copy);
test2d2[0][0] = 8;
test2d2[1][3] = 8;
console.log(test2d2);
console.log(test2d2copy);