const print = require('./helpers/print');
const getFileData = require('./helpers/getFileData');
const parseRule = require('./helpers/parseRule');
const _ = require("lodash");

const rules = getFileData('/day7_test2.txt','\n');
const parsedRules = rules.map(rule => parseRule(rule));
const bagMap = {};
parsedRules.forEach(rule => bagMap[rule.parent] = rule.children);
//console.log(bagMap);

function findBagsParents(bag) {
    const parents = [];
    const searchRegex = new RegExp(bag);
    parsedRules.filter(rule => rule.children.some(el => searchRegex.test(el))).forEach(rule => parents.push(rule.parent));
    return parents;
}
const parents = findBagsParents('shiny gold');

function getAnswer1() {
    const answer1 = [];
    while(parents.length > 0){
        const testCase = parents.pop();
        answer1.push(testCase);
        const results = findBagsParents(testCase);
        //print(['running',testCase,results]);
        results.forEach(result => {
            if(!answer1.includes(result) && !parents.includes(result)){ parents.push(result) }
        })
        //console.log(parents);
    }
    return {answer: answer1.length, details: answer1}
}

function crawlTree(node, nodesToCheck, results) {
    const parsedNode = parseNode(node);
    const children = bagMap[parsedNode.name];
    results.push({parent: parsedNode.name, result: parsedNode.value});
    nodesToCheck.push(...children);
    if(nodesToCheck.length > 0){ crawlTree(nodesToCheck.pop(), nodesToCheck, results) }
    return results;
}

function parseNode(node){ 
    return {
        value: parseInt(node.substring(0,node.indexOf(' '))),
        name: node.substring(node.indexOf(' ')+1)
    }
}

//console.log(parsedRules);

//console.log(parseNode('3 test name'));

//console.log(getChildrenTotal('shiny gold', 1));

//console.log(getAnswer1().answer);

console.log(crawlTree('0 shiny gold', [], []));


