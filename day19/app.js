const getFileData = require('../helpers/getFileData');
const _ = require("lodash");

const data = getFileData('/day19/input.txt','\n\n');
const r = data[0].split('\n')
                .map(rule => {
                    const x = rule.replace(/\"/g,"");
                    return x.split(": ");
                });
const allRules = Object.fromEntries(r);
const input = data[1].split('\n');


let currentIndex = 0;
const validStrings = [allRules['0']];
while(currentIndex < validStrings.length){
    let currentString = validStrings[currentIndex];
    while(currentString.match(/\d+/g)){
        const nextRuleId = currentString.match(/\d+/g)[0];
        const nextRule = allRules[nextRuleId];
        //console.log(nextRule);
        if(nextRule.indexOf("|") >= 0){
            const next1 = nextRule.split("|")[0];
            const next2 = nextRule.split("|")[1];
            validStrings.push(currentString.replace(nextRuleId, next2))
            //console.log(`swapping ${nextRuleId} and ${nextRule}.`)
            //currentString = currentString.replace(nextRuleId, next1);
        } else {
            //console.log(`swapping ${nextRuleId} and ${nextRule}.`)
            currentString = currentString.replace(nextRuleId, nextRule);
        };
        //console.log(currentString);
        //console.log('pause');
    }
    validStrings[currentIndex] = currentString;
    currentIndex += 1;
}

const validations = validStrings.map(str => str.replace(/ /g,""));

const answers = input.map(test => validations.includes(test) ? 1 : 0);

console.log(answers);
console.log(answers.reduce((a, x) => a + x, 0));
