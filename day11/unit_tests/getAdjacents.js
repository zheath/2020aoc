const SeatModel = require("../../classes/SeatModel");
const getFileData = require('../../helpers/getFileData');

const test1 = getFileData('/day11/unit_tests/testGrid1.txt','\n').map(row => row.split(""));
const sm1 = new SeatModel(test1);
const test2 = getFileData('/day11/unit_tests/testGrid2.txt','\n').map(row => row.split(""));
const sm2 = new SeatModel(test2);
const test3 = getFileData('/day11/unit_tests/testGrid3.txt','\n').map(row => row.split(""));
const sm3 = new SeatModel(test3);
const test4 = getFileData('/day11/unit_tests/testGrid4.txt','\n').map(row => row.split(""));
const sm4 = new SeatModel(test4);
sm4.printModel();
console.log('Test1:',sm1.seatGrid.getAdjacents({x: 3, y: 4}).length == 8);
console.log('Test2:',sm2.seatGrid.getAdjacents({x: 1, y: 1}).length == 0);
console.log('Test3:',sm3.seatGrid.getAdjacents({x: 3, y: 3}).length == 0);


console.log(sm4.seatGrid.getAdjacents({x: 2, y: 9}));