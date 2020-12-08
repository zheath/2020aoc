const print = require('../helpers/print');
const getFileData = require('../helpers/getFileData');
const parseRule = require('../helpers/parseRule');
const rules = getFileData('/day7/day7_test2.txt','\n');

const bagMap = {};
rules
    .map(rule => parseRule(rule))
    .forEach(rule => bagMap[rule.parent] = rule.children);

function crawlTree(parent, flowLog) {
    const currChildren = bagMap[parent.name];
    if(currChildren.length == 0){
        flowLog.push({bag: parent.name, value: parent.value});
        return parseInt(parent.value);
    }
    const result = parent.value + currChildren
                                        .map(child => parent.value * crawlTree(child, flowLog))
                                        .reduce((acc, n) => acc + n, 0);
    flowLog.push({bag: parent.name, value: result});
    console.log(flowLog);
    return result;
}

//subtract one from final result to pull the shiny gold bag off the total.
console.log(crawlTree({value: 1, name: 'shiny gold'}, [], [])-1);

