const BitComputer = require('../classes/BitComputer');
const getFileData = require('../helpers/getFileData');
const _ = require("lodash");

function parseMemInst(s){
    const start = s.indexOf('[')+1;
    const stop = s.indexOf(']');
    const equalIndex = s.indexOf('=');
    const output = {loc: parseInt(s.substring(start, stop)), val: parseInt(s.substring(equalIndex+2))}
    //console.log(output);
    return output;
}

const instructions = getFileData('/day14/input.txt','\n').map(inst => {
    if(inst.substring(0,3) == 'mem'){ 
        const parsed = parseMemInst(inst);
        return {type:'mem', loc: parsed.loc, value: parsed.val} 
    }
    return {type: 'msk', value: inst.substring(7)}
});
//console.log(instructions);
//console.log(instructions.filter(el=>el.type=="mem").length);
const bc = new BitComputer(instructions);
//const mem = bc.run();
//console.log(mem);
//console.log(Object.values(mem).reduce((acc, x) => acc + x, 0))
const mem = bc.run2();
console.log(Object.keys(mem).length);
console.log(Object.values(mem).reduce((acc, x) => acc + x, 0))

