const getFileData = require('../helpers/getFileData');

const data = getFileData('/day19/input.txt','\n\n');
const rules = data[0].split('\n')
                .map(rule => {
                    const x = rule.replace(/\"/g,"");
                    return x.split(": ").map((a,i) => i == 1 && !/a|b/.test(a) ? '('+a+')' : a)
                });
const allRules = Object.fromEntries(rules);
const input = data[1].split('\n');

/*
console.log('********************************')
console.log('All Rules');
console.log(allRules);
console.log('')
*/

function buildRuleString(ruleId){
    let rule = allRules[ruleId];
    //console.log(rule);
    while(rule.match(/\d+/g)){
        const otherRuleIds = rule.match(/\d+/g);
        otherRuleIds.forEach(otherRuleId => rule = rule.replace(otherRuleId, allRules[otherRuleId]));
    }
    allRules[ruleId] = rule;
    return allRules[ruleId];
}

const regex = buildRuleString('0').replace(/ /g,"");
console.log('REGEX:',regex);

const r = new RegExp('^'+regex+'$');

const answers = input.map(test => {
    //console.log('');
    //console.log(`Testing ${test}.`)
    //console.log(r);
    const answer = r.test(test);
    //console.log(`Answer: ${answer}`);
    return answer ? 1 : 0;
})

console.log(answers);
console.log(answers.reduce((a, x) => a + x, 0));
