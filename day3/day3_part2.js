const inputs = require("./day3_input");
const _ = require("lodash");
const map = inputs.real.map(row => row.split(""));
const width = map[0].length;

function countTrees(slope){
    const xInc = slope[0];
    const yInc = slope[1];
    //starting positions
    let x = xInc; 
    let y = yInc;
    let treeCount = 0;
    while(y < map.length){
        if(map[y][x]=='#'){treeCount+=1}
        x += xInc;
        if(x >= width){x = x - width} // reset x position when beyond right boundary
        y += yInc;
    }
    return treeCount;
}

const slopes = [ [1, 1], [3, 1], [5, 1], [7, 1], [1, 2] ]

const answers = [];
slopes.forEach(slope => answers.push(countTrees(slope)));
console.log(answers);
const output = _.reduce(answers, (tot, n) => tot * n, 1);
console.log(output);