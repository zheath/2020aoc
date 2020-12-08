const getFileData = require('../helpers/getFileData');
const updateInstructions = require('../helpers/updateInstructions');
const Instruction = require('../classes/Instruction');
const Computer = require('../classes/Computer');
const instructions = getFileData('/day8/input.txt','\n').map(inst => new Instruction(inst));

//part 1: 
const p1Comp = new Computer(instructions);
console.log(p1Comp.run());

//part 2:
let currComp = new Computer(instructions);
let res = currComp.run();
let lastUpdatedInstructionIndex = -1;
while(res.exitCode != 1){
    lastUpdatedInstructionIndex = updateInstructions(lastUpdatedInstructionIndex, instructions);
    res = new Computer(instructions).run();
}
console.log(res);