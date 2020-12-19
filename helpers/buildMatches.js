const getGroups = require("./getGroups");
const _ = require("lodash");

function buildMatches(problem){
    const matches = [...getGroups(problem)];
    let ind = 0;
    while(true){
        //console.log('')
        //console.log(matches);
        if(ind == matches.length){ return _.reverse(matches) }
        //console.log(`current index: ${ind}`)
        nextProblem = matches[ind];
        //console.log('next problem');
        //console.log(nextProblem);
        matches.push(...getGroups(nextProblem.slice(1,-1)));
        ind += 1;
    }
}

module.exports = buildMatches;