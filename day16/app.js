const TicketScanner = require("../classes/TicketScanner");
const getFileData = require('../helpers/getFileData');
const _ = require("lodash");

const input = getFileData('/day16/input.txt','\n\n').map(section => section.split('\n'));
const features = {};
input[0].forEach(feature => {
    const colInd = feature.indexOf(':');
    const featureName = feature.slice(0,colInd);
    const ranges = feature.slice(colInd+2).replace(' or ',',').split(",");//.map(range => ({start: range.split('-')[0], end: range.split('-')[1]}));
    features[featureName] = ranges[0].split("-").concat(ranges[1].split("-")).map(n => parseInt(n));
});
const myTicket = input[1][1].split(",");
const otherTickets = input[2].slice(1).map(ticket => ticket.split(",").map(n => parseInt(n)));
const ts = new TicketScanner(features, otherTickets, myTicket);
console.log(ts.features);
//console.log(ts.tickets);
const max = otherTickets.reduce((max, ticket) => {
    const test = Math.max(...ticket);
    return test < max ? max : test;
}, 0);
