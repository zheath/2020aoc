const operations = {
    '+': (a, b) => parseInt(a) + parseInt(b),
    '-': (a, b) => parseInt(a) - parseInt(b),
    '*': (a, b) => parseInt(a) * parseInt(b)
}

const isNumber = /\d+/g;
const isAddTerm = /\d+\+\d+/;

function solveExpression(exp){
    let addDone = false;
    //do addition first
    while(!addDone){
        const addTerm = exp.match(isAddTerm);
        console.log(addTerm);
        if(addTerm){
            const nums = addTerm[0].match(isNumber);
            console.log(nums);
            const ans = operations["+"](nums[0], nums[1]);
            console.log(ans);
            exp = exp.replace(addTerm, ans)
            console.log(exp);
        } else {
            addDone = true;
        }
    }
    //do multiplication
    return exp.match(isNumber).reduce((acc, x) => acc * parseInt(x), 1);
}

module.exports = solveExpression;