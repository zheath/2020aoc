function updateInstructions(lastIndex, inst){
    //console.log('lastIndex',lastIndex)
    if(lastIndex >= 0){inst[lastIndex].toggle()}
    let ind = lastIndex;
    let testInst = {};
    while(true){
        ind = ind + 1;
        testInst = inst[ind];
        //console.log('test instruction');
        //console.log(testInst);
        switch(testInst.getType()){
            case 'acc':
                break;
            default:
                testInst.toggle();
                return ind; //{newInd: ind, newInst: inst};
        }
    }
}

module.exports = updateInstructions;