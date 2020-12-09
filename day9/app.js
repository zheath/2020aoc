const getFileData = require('../helpers/getFileData');
const print = require('../helpers/print');
const data = getFileData('/day9/input.txt','\n').map(el => parseInt(el));
const _ = require("lodash");

//console.log(input);
const preambleSize = 25;

//part 1:
const p1 = getFirstInvalidNum(preambleSize, data);
console.log(`Test completed, first invalid number: ${p1.num}, at position ${p1.posn}`);

//part 2:
const p2 = breakXmas(p1.num, data);
console.log(p2);
console.log(`Results: ${Math.min(...p2)} + ${Math.max(...p2)} = ${Math.min(...p2) + Math.max(...p2)}`);

function breakXmas(num, data){
    //console.log('breaking christmas',num,data);
    let sum = 0;
    let left = 0;
    let right = 1;
    let window = [];
    while(sum != num){
        window = data.slice(left, right);
        //console.log(window);
        sum = window.reduce((tot, x) => tot + x, 0);
        //console.log(sum);
        if(right == data.length-1){
            left += 1;
            right = left + 1;
        } else {
            right += 1;
        }
    }
    return window;
}

function getFirstInvalidNum(size, input){
    let currentPosition = size;
    let currentTest = 0;
    let stillValid = true;
    let currentWindow = [];
    //part 1:
    while(stillValid){
        currentWindow = input.slice(currentPosition - preambleSize, currentPosition);
        currentTest = input[currentPosition];
        stillValid = isValidNumber(currentTest, currentWindow);
        currentPosition += 1;
    }
    return {num: currentTest, posn: currentPosition -1};
}

function isValidNumber(number, window){    
    let testArray = _.filter(window.sort((a,b) => a - b), el => el < number);
    let left = 0;
    let right = testArray.length - 1;
    //print(['checking position and window', number, window, testArray, left, right]);
    while(left < right){
        const sum = testArray[left] + testArray[right];
        //console.log(sum);
        if(sum == number){
            return true;
        } else if (sum < number){
            left += 1;
        } else {
            right -= 1;
        }
    }
    return false;
}