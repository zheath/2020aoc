const Boat = require('../classes/Boat');
const getFileData = require('../helpers/getFileData');
const notes = getFileData('/day13/input.txt','\n');
//console.log(notes);
const earliestDeparture = parseInt(notes[0]);
const busIds = notes[1].split(',').filter(busId => busId != 'x').map(id => parseInt(id));
const restrictions = notes[1].split(',').map((el, i) => (el == 'x' ? el : {wait: i, id: parseInt(el)})).filter(el => el != 'x');
//console.log(earliestDeparture);
//console.log(busIds);
console.log(restrictions);

function getNextBus(){
    let nextTS = earliestDeparture;
    let outId = 0;
    let done = false;
    while(!done){
        nextTS += 1;
        console.log('');
        console.log('');
        console.log('');
        busIds.forEach(id => {            
            const test = nextTS % id;
            console.log(`${nextTS} mod ${id} = ${test}.`);
            if(test==0){done = true; outId = id;};
        })
    }
    return {waitTime: nextTS - earliestDeparture, busID: outId}
}

/****
 * part1
 *
const answer = getNextBus();
console.log(answer, answer.waitTime*answer.busID);
*/

//part2
function calcTime(){
    let failed = false;
    let done = false;
    let t = 800000000000000;
    const end = 850000000000000;
    while(!done){
        t += 1;
        //console.log(`Testing time ${t}.`)
        restrictions.forEach(rest => {            
            const mod = (t + rest.wait) % rest.id;
            //console.log(t+rest.wait);
            //console.log(rest.id);
            //console.log(mod);
            //console.log(`Restriction mod for ${JSON.stringify(rest)}: ${mod}`);
            if(mod != 0){ failed = true }
        })
        if(t%100000000==0){console.log(`just finished time: ${t}`)}
        if(!failed){ done = true } else { failed = false };
        if(t == end){ console.log('no valid time in this range'); break; }
    }
    return t;
}

console.log('Answer:',calcTime());