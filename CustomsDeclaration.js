const print = require("./helpers/print");
const _ = require("lodash");

function getAnswersAny(arr) {
    if(arr.length == 1){ return arr[0].length };
    return [...new Set(arr.join("").split(""))].length;
}

function getAnswersAll(arr) {
    if(arr.length == 1){ return arr[0].length };
    const answers = arr.join("").split("");
    const distinctAnswers = [...new Set(answers)];
    const output = []
    distinctAnswers.forEach(answer => {
        if(_.filter(answers, a => a == answer).length == arr.length){output.push(answer)}
    })
    //console.log(output);
    return output.length;
}

class CustomsDeclaration {
    constructor(answers){
        this.groupSize = answers.length
        this.yesAnswersAny = getAnswersAny(answers) // part 1 answer
        this.yesAnswersAll = getAnswersAll(answers) // part 2 answer
    }
}

module.exports = CustomsDeclaration;