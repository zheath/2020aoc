const _ = require('lodash');
const Boat = require("../../classes/Boat");
const b = new Boat();
//note: boat's waypoint starts at x = 10, y = 1;
//console.log('Test1 - invalid direction: ',b.moveWaypoint('T',200))
console.log('Test1 - North, 10: ',_.isEqual(b.moveWaypoint('N', 10), {x: 10,y: 11}));

console.log('Test2 - West, 10: ',_.isEqual(b.moveWaypoint('W', 10), {x: 0,y: 11}));

console.log('Test3 - East, 15: ',_.isEqual(b.moveWaypoint('E', 15), {x: 15,y: 11}));

console.log('Test3 - South, 25: ',_.isEqual(b.moveWaypoint('S', 25), {x: 15,y: -14}));
