const Grid3d = require("../classes/Grid3d");
const getFileData = require('../helpers/getFileData');
const _ = require("lodash");

const initPlane = getFileData('/day17/input.txt','\n').map(row => {
    const rowArr = row.split("").map(cell => cell == "." ? 0 : 1)
    return rowArr;
});

const g = new Grid3d(initPlane);
//console.log(g);
/*
g.printSpaceDimensions();
g.printSpace();
g.expandSpace();
g.printSpaceDimensions();
g.printSpace();
g.expandSpace();
g.printSpaceDimensions();
g.printSpace();
*/
g.transitionSpace();
console.log('Active Nodes:',g.countActive());
g.transitionSpace();
console.log('Active Nodes:',g.countActive());
g.transitionSpace();
console.log('Active Nodes:',g.countActive());
g.transitionSpace();
console.log('Active Nodes:',g.countActive());
g.transitionSpace();
console.log('Active Nodes:',g.countActive());
g.transitionSpace();
console.log('Active Nodes:',g.countActive());