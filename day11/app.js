
const SeatModel = require("../classes/SeatModel");
const getFileData = require('../helpers/getFileData');
const print = require('../helpers/print');
const data = getFileData('/day11/test1.txt','\n').map(row => row.split(""));

const sm = new SeatModel(data);
let done = false;
let i = 1;
sm.init();

while(!done){
    done = sm.transition();
    console.log('');
    console.log('----------------------------------')
    console.log('----------------------------------')
    console.log(`Transition ${i}`);    
    //sm.printModel();
    console.log(`Current occupied count = ${sm.numOccupied()}`)
    console.log('----------------------------------')
    i += 1;
}