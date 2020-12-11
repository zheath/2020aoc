const TreeNode = require('../classes/TreeNode');
const getFileData = require('../helpers/getFileData');
const print = require('../helpers/print');
const data = getFileData('/day10/test2.txt','\n').map(el => parseInt(el)).sort((a,b) => a-b);
data.unshift(0);
//data.push(data[data.length-1]+3);

//part 1
const output = {'3': 1}; // includes final number, which is three after last adapter
data.forEach((el, i) => {
    if(i == 0){ output[el] = 1 } else {
        const diff = el - data[i-1];
        if(diff in output){
            output[diff] += 1;
        } else {
            output[diff] = 1;
        }
    }
});
//console.log(output);
//console.log(output['1'] * output['3']);

//part 2
const tribonnaci = [0,1,1,2,4,7,13,24,44,81,149];
console.log(data);

function countPaths() {
    let count = 1;
    let answers = [];
    for(var i = 1; i < data.length; i++){
        if(data[i]-data[i-1] === 1){
            count += 1;
        } else {
            answers.push(count);
            count = 1;
        }
    }
    answers.push(count);
    console.log(answers);
    return answers.map(x => tribonnaci[x]).reduce((acc,x) => acc * x, 1);
}

console.log(countPaths());