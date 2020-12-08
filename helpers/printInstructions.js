function printInstructions(instructions){
    console.log('');
    console.log('');
    console.log('********************* Current Instruction Set *********************')
    instructions.forEach(inst => console.log(`${inst.getType()} ${inst.getVal()}`))
}

module.exports = printInstructions;