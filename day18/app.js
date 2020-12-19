const getFileData = require('../helpers/getFileData');
const solveProblem = require('../helpers/solveProblem');

const answers = getFileData('/day18/input.txt','\n').map(problem => solveProblem(problem.replace(/ /g,"")));
//console.log(answers);
console.log(answers.reduce((a, b) => a + b, 0));
