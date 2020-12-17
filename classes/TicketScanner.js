const findCommon = require("../helpers/findCommon");
const print = require("../helpers/print");

function checkRanges(num, ranges){
    let error = true;
    while(error && ranges.length >0){
        const testRange = ranges.pop();
        if(num >= testRange.start && num <= testRange.end){error = false}
        //console.log(`Testing ${num} against range: ${JSON.stringify(testRange)} = ${error}`)
    }
    return error;
}

class TicketScanner {
    constructor(features, tickets, myTicket){
        this.features = features;
        this.tickets = tickets;
        this.myTicket = myTicket;
        this.taken = [];
    }
    removeInvalidTickets(){
        const allRanges = this.features.reduce((out, feature) => out.concat(feature.ranges),[]);
        this.tickets = this.tickets.filter(ticket => !ticket.map(num => checkRanges(parseInt(num), [...allRanges])).reduce((out, x) => out = out ? out : x, false));
    }
    scan(){
        this.removeInvalidTickets();
        const pMap = {};
        //init pMap
        this.tickets[0].forEach((num, i) => pMap[i+1] = []);
        this.tickets.forEach(ticket => ticket.forEach((num,i) => pMap[i+1].push(num)));
        for(const position in pMap){
            const nums = pMap[position];
            const testFeatures = pMap[position].map(num => this.getFeatures(parseInt(num)));
            const commonFeatures = findCommon(testFeatures);
            const commFeature = commonFeatures.filter(feat => !this.taken.includes(feat))[0];
            /*if(!commFeature){                
                print(['Numbers',JSON.stringify(nums),'possible features',testFeatures[0],'common options',commonFeatures,'taken', this.taken, 'answer:',commFeature]);
                console.log('');
                console.log('');
            }*/
            pMap[position] = commFeature;
            this.taken.push(commFeature);
        }
        //console.log(pMap);
        return pMap;
    }
    getFeatures(num){
        const output = [];
        this.features.forEach(feature => {
            //console.log(feature)
            feature.ranges.forEach(range => {
                if(num >= range.start && num <= range.end){
                    output.push(feature.feature);
                }
            })
        })
        //console.log(`Number ${num} found ${output.length} features.`);
        return output;
    }
    printFeatures(){
        console.log('');
        this.features.forEach(feature => {
            const range = feature.ranges.map(r => r.start + '-' + r.end);
            console.log(feature.feature+':', range.join(', '))
        })
    }
}

module.exports = TicketScanner;