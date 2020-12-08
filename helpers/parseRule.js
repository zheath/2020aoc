const { toLength } = require("lodash");
const print = require("./print");

function parseNode(node){ 
    //console.log(node);
    return {
        value: parseInt(node.substring(0,node.indexOf(' '))),
        name: node.substring(node.indexOf(' ')+1)
    }
}

function parseRule(rule) {
    const startSearchPosition = rule.indexOf(' ') + 1;
    const parent = rule.substring(0, rule.indexOf(' ', startSearchPosition));   
    const children = rule.substring(rule.indexOf('contain')+8).match(/[0-9]+ [a-z]+ [a-z]+/g);
    //print(['Parsing Rule', rule, parent, children]);
    return {parent: parent, children: children ? children.map(node => parseNode(node)) : []};
}

module.exports = parseRule;