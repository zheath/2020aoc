const getFileData = require('../helpers/getFileData');
const updateInstructions = require('../helpers/updateInstructions');
const printInstructions = require('../helpers/printInstructions');
const Instruction = require('../classes/Instruction');
const Computer = require('../classes/Computer');
const instructions = getFileData('/day8/test1.txt','\n').map(inst => new Instruction(inst));

printInstructions(instructions);
console.log('New Index:',updateInstructions(-1,instructions));
printInstructions(instructions);
console.log('');
console.log('New Index:',updateInstructions(0,instructions));
printInstructions(instructions);
console.log('');
console.log('New Index:',updateInstructions(2,instructions));
printInstructions(instructions);

