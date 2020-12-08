function getType(inst){
    return inst.substring(0,3);
}

function getValue(inst){
    return inst.substring(4);
}

class Instruction {
    constructor(str){
        this.instructionString = str;
        this.instructionType = getType(str);
        this.instructionValue = getValue(str);
    }
    getVal(){
        return this.instructionValue;
    }
    getType(){
        return this.instructionType;
    }
    toggle(){
        switch(this.instructionType){
            case 'nop':
                this.instructionType = 'jmp';
                return;
            case 'jmp':
                this.instructionType = 'nop';
                return;            
        }
        throw new Error('Unknown instruction type for toggle method.');
    }
    execute(acc, index){
        //console.log(`Executing Instruction`)
        //console.log(this);
        switch(this.instructionType){
            case 'acc':
                return {acc: parseInt(acc) + parseInt(this.instructionValue), nextIndex: parseInt(index) + 1};
            case 'nop':
                return {acc: parseInt(acc), nextIndex: parseInt(index) + 1};
            case 'jmp':
                return {acc: parseInt(acc), nextIndex: parseInt(index) + parseInt(this.instructionValue)};
            default:
                throw new Error(`Unknown instruction type: ${this.instructionType}!!!`);
        }
    }
}

module.exports = Instruction;