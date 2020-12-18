const solveExpression = require("./solveExpression");
const isGroup = /\((?!.+\().+?\)/g;
const sum = /(?<!\+ )\d+ \+ \d+/g;

function solveProblem(problem){
    //console.log(`Probelem pre-cleaning: ${problem}`);
    const matchSums = problem.match(sum);
    //console.log('sum matches for grouping');
    //console.log(matchSums);
    if(matchSums){matchSums.forEach(match => {
        let cleanup = true;
        const index = problem.indexOf(match);
        const preChar = problem.slice(index-1, index);
        const postChar = problem.slice(index + match.length, index + match.length + 1);
        //console.log('Pre:',preChar,'Post:',postChar);
        if(preChar == "(" && postChar == ")"){cleanup = false};
        if(preChar == "" && postChar == ""){cleanup = false};
        if(cleanup){problem = problem.replace(match, '('+match+')')};
    })};
    const cleanMatches = problem.match(/\(\d+\)/g);
    //console.log('clean matches');
    //console.log(cleanMatches);
    if(cleanMatches){cleanMatches.forEach(match => problem = problem.replace(match,match.match(/\d+/)))};
    //console.log(`Solving equation: ${problem}`);
    const notDone = problem.match(isGroup);
    //console.log(notDone);
    if(!notDone){ return solveExpression(problem.replace(/ |\)|\(/g,'')) }
    const groups = notDone.map(group => group.replace(/\(\(|\(\(\(/g, '(').replace(/\)\)|\)\)\)/g, ')'));
    groups.forEach(group => {
        const exp = group.replace(/ |\)|\(/g,'');
        //console.log(exp);
        const answer = solveExpression(exp); 
        problem = problem.replace(group, answer.toString());
    })
    return solveProblem(problem);
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