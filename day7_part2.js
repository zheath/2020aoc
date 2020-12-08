const print = require('./helpers/print');
const getFileData = require('./helpers/getFileData');
const parseRule = require('./helpers/parseRule');
const _ = require("lodash");

const rules = getFileData('/day7_test2.txt','\n');
const parsedRules = rules.map(rule => parseRule(rule));
const bagMap = {};
parsedRules.forEach(rule => bagMap[rule.parent] = rule.children);
//console.log(bagMap);

function crawlTree(parent, results, flowLog) {
    const currChildren = bagMap[parent.name];
    //print(['crawling',bag.name,currChildren])
    if(currChildren.length == 0){
        //reached leaf node, return value of leaf
        //console.log(`Returning ${bag.name}, ${bag.value}`);
        flowLog.push({bag: parent.name, value: parent.value});
        return parent.value;
    }
    const childResult = currChildren.map(child => {
        //console.log(child);
        const res = parent.value * crawlTree(child, results, flowLog);
        //console.log(res);
        //results.push(res);        
        return res;
    }).reduce((acc, n) => acc + n, 0);
    //console.log(`Child result for ${parent.name}: ${childResult}. Adding to ${parent.value}`);
    //const parentResult = parent.value == 0 ? results.reduce((acc, x) => acc + x, 0) : parent.value + childResult;
    const parentResult = parent.value + childResult;
    flowLog.push({bag: parent.name, value: parentResult});
    if(!isNaN(parentResult)){results.push(parentResult)};
    console.log(flowLog);
    return results.reduce((acc, n) => acc+n,0);
}

console.log(crawlTree({value: 0, name: 'shiny gold'}, [], []));

