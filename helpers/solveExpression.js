const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b
}

const isNumber = /\d+/g;

function solveExpression(exp){
    //console.log(`In solve1 for ${exp}`)
    const digits = exp.match(isNumber);
    const d1 = parseInt(digits.slice(0,2)[0]);
    const d1len = d1.toString().length;
    const d2 = parseInt(digits.slice(0,2)[1]);
    const d2ind = exp.indexOf(d2, d1len+1);
    const d2len = d2.toString().length;
    const operator = exp.substring(d2ind-1,d2ind);
    const a = operations[operator](d1, d2);
    if(digits.length == 2){
        return a;
    } else {
        return solveExpression(a.toString() + exp.substring(d2ind+d2len))
    }
}

module.exports = solveExpression;