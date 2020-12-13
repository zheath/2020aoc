const _ = require('lodash');
const Boat = require("../../classes/Boat");
const b = new Boat();
//note: boat's waypoint starts at x = 10, y = 1;
//console.log('Test0 - invalid degrees:',b.rotateWaypoint(-100));

/****
 * -90 = 270
 * (x, y) => (-y, x)
*/
console.log('Test1 - Rotate R, 90: ',_.isEqual(b.rotateWaypoint(-90), {x: -1,y: 10}));
console.log('Test2 - Rotate L, 270: ',_.isEqual(b.rotateWaypoint(270), {x: -10,y: -1}));

/****
 * -180 = 180
 * (x, y) => (-x, -y)
*/
console.log('Test3 - Rotate R, 180: ',_.isEqual(b.rotateWaypoint(-180), {x: 10,y: 1}));
console.log('Test4 - Rotate L, 180: ',_.isEqual(b.rotateWaypoint(180), {x: -10,y: -1}));

/****
 * -270 = 90
 * (x, y) => (y, -x)
*/
console.log('Test5 - Rotate R, 270: ',_.isEqual(b.rotateWaypoint(-270), {x: -1,y: 10}));
console.log('Test6 - Rotate L, 90: ',_.isEqual(b.rotateWaypoint(90), {x: 10,y: 1}));

