const _ = require('lodash');
const Boat = require("../../classes/Boat");
const b = new Boat();
//note: boat's waypoint starts at x = 10, y = 1;
console.log('Test1 - Forward, 10x: ',_.isEqual(b.moveShip(10), {x: 100,y: 10}));
b.moveWaypoint('N',5); //x: 10, y: 6
console.log('Test2 - Forward, 5x: ',_.isEqual(b.moveShip(5), {x: 150,y: 40}));

