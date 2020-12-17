const TicketScanner = require("../classes/TicketScanner");
const getFileData = require('../helpers/getFileData');
const _ = require("lodash");

const input = getFileData('/day16/input.txt','\n\n').map(section => section.split('\n'));
const features = input[0].map(feature => {
    const colInd = feature.indexOf(':');
    const featureName = feature.slice(0,colInd);
    const ranges = feature.slice(colInd+2).replace(' or ',',').split(",").map(range => ({start: range.split('-')[0], end: range.split('-')[1]}));
    return { feature: featureName, ranges: ranges }
});
const myTicket = input[1][1].split(",");
const otherTickets = input[2].slice(1).map(ticket => ticket.split(","));
const ts = new TicketScanner(features, otherTickets, myTicket);
const results = ts.scan();
ts.printFeatures();

/*
const keys = [];
for (const key in results){
    const test = results[key] ? results[key] : '';
    console.log(test)
    if(test.indexOf('departure') >= 0){keys.push(parseInt(key))}
}
console.log(keys);
const answer = keys.map(key => parseInt(ts.myTicket[key]))
console.log(answer);
console.log(answer.reduce((acc, x) => acc * x, 1));

console.log(ts.taken.filter(t => t));
console.log(ts.features);
//duration, row, seat, train*/