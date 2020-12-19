const solveExpression = require("./solveExpression");
const buildMatches = require("./buildMatches");
const _ = require("lodash");

function solveProblem(problem){
    const matches = buildMatches(problem);
    let answers = {};
    while(matches.length > 0){
        const exp = matches.shift();
        console.log(exp);
        const ans = solveExpression(exp.slice(1,-1));
        console.log(ans);
        answers[exp] = ans;
        if(matches.length == 0){ break };
        if(matches[0].match(/\(/g).length > 1){ break };
    }
    const answerKeys = Object.keys(answers);
    console.log('problem prior to solution');
    console.log(problem);
    console.log(matches);
    console.log(answers);
    matches.forEach(match => {
        let temp = match;
        answerKeys.forEach(key => temp = temp.replace(key, answers[key]));
        console.log(temp);
        problem = problem.replace(match, solveExpression(temp));
    })
    answerKeys.forEach(key => problem = problem.replace(key, answers[key]))
    console.log(matches);
    console.log(answers);
    console.log(problem)
    
    return solveExpression(problem);
}

/* part 1
function solveProblem(problem){
    //console.log(`Solving equation: ${problem}`);
    const notDone = problem.match(isGroup);
    if(!notDone){ return solveExpression(problem.replace(/ |\)|\(/g,'')) }
    const groups = notDone.map(group => group.replace(/\(\(/g, '(').replace(/\)\)/g, ')'));
    groups.forEach(group => {
        const exp = group.replace(/ |\)|\(/g,'');
        //console.log(exp);
        const answer = solveExpression(exp); 
        problem = problem.replace(group, answer.toString());
    })
    return solveProblem(problem);
}
*/

module.exports = solveProblem;