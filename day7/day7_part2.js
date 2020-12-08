const print = require('../helpers/print');
const getFileData = require('../helpers/getFileData');
const parseRule = require('../helpers/parseRule');
const _ = require("lodash");

const rules = getFileData('/day7/day7_real.txt','\n');
const parsedRules = rules.map(rule => parseRule(rule));
const bagMap = {};
parsedRules.forEach(rule => bagMap[rule.parent] = rule.children);
//console.log(bagMap);

function crawlTree(parent, flowLog) {
    const currChildren = bagMap[parent.name];
    if(currChildren.length == 0){
        flowLog.push({bag: parent.name, value: parent.value});
        return parseInt(parent.value);
    }
    const childResult = currChildren.map(child => {   
        return parent.value * crawlTree(child, flowLog);;
    });
    //console.log(`Child result for ${parent.name}: ${childResult}. Adding to ${parent.value}`);
    //const parentResult = parent.value == 0 ? results.reduce((acc, x) => acc + x, 0) : parent.value + childResult;
    const parentResult = parent.value + childResult.reduce((acc, n) => acc + n, 0);
    flowLog.push({bag: parent.name, value: parentResult});
    console.log(flowLog);
    return parentResult;
}

//f(bag) = bagValue + forEachChild(f(child));

console.log(crawlTree({value: 1, name: 'shiny gold'}, [], [])-1);

