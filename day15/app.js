const getFileData = require('../helpers/getFileData');
const _ = require("lodash");

const numbers = _.reverse(getFileData('/day15/test1.txt','\n').join("").split(","));


//part 1, brute force
while(numbers.length < 2020){
    const currNum = numbers[0];
    const lastSaidIndex = numbers.indexOf(currNum,1);
    if(lastSaidIndex < 0){ //first time spoken
        //console.log(`Saying zero because ${currNum} was not found!`)
        numbers.unshift('0');
    } else {
        //because I reversed the array, I have to adjust the last said index by the length of the array
        const nextNum = numbers.length - (numbers.length - lastSaidIndex);
        //console.log(`${currNum} found at ${lastSaidIndex}. NextNumb: ${nextNum}`)
        numbers.unshift(nextNum.toString());
    }
}
//console.log(numbers[0]);

//part 1 & 2 with index lookup
let turn = 1;
const start = new Date();
const numIndex = {};
const numbers2 = getFileData('/day15/input.txt','\n').join("").split(",");
let lastNum = _.last(numbers2);
numbers2.forEach(num => {numIndex[num] = {curr: turn, prev: 0}; turn += 1;})
while(turn <= 30000000){
    let test = numIndex[lastNum];
    nextNum = test.prev === 0 ? '0' : (test.curr - test.prev).toString();
    if(numIndex[nextNum]){
        numIndex[nextNum].prev = numIndex[nextNum].curr;
        numIndex[nextNum].curr = turn;
    } else {
        numIndex[nextNum] = {curr: turn, prev: 0};
    }
    lastNum = nextNum;
    turn += 1;
    if(turn % 1000000 == 0){console.log('starting turn',turn)}
}
const end = new Date();
console.log(lastNum);
console.info('Execution time: %dms', start - end);