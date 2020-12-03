const inputs = require("./day3_input");
const print = require("./helpers/print");
const data = inputs.real;

const iterations = Math.floor(data.length / 3) + 1;

const expandedMap = data.map(row => {
    let string = '';
    for(i=1; i<=iterations; i++){string += row}
    return string.split("")
});
//remove first row from array since we don't care about any trees in this row
expandedMap.shift();

console.log(expandedMap);

const trees = [];
const empties = [];
let currentIndex = 0; //starting position = 1
expandedMap.forEach((row, index) => {
    currentIndex += 3
    if(row[currentIndex]=='#'){
        trees.push(index);
    } else {
        empties.push(index);
    }
});

print(["Answers",`Tree Count: ${trees.length}`,`Empty Count: ${empties.length}`]);
console.log(trees);
console.log(empties);