const Boat = require('../classes/Boat');
const getFileData = require('../helpers/getFileData');
const instructions = getFileData('/day12/input.txt','\n').map(inst => {return {dir: inst.substring(0,1), value: inst.substring(1)}});
//console.log(instructions);
const b = new Boat();
instructions.forEach(inst => {
    switch(inst.dir){
        case 'F':
            b.moveShip(inst.value);
            break;
        case 'R':
            b.rotateWaypoint(inst.value*-1);
            break;
        case 'L':
            b.rotateWaypoint(inst.value);
            break;
        default:
            b.moveWaypoint(inst.dir, inst.value);
    }
});
console.log(b.calcPosition());
console.log('****************************************')
console.log('****************************************')
console.log('****************************************')
console.log('');
console.log('');
