const inputs = require("./day5_input");
const _ = require("lodash");
const BoardingPass = require("./BoardingPass");

const passes = []
inputs.real.forEach(bpString => {
    const bp = new BoardingPass(bpString);
    passes.push(bp);
});

const sorted = _.sortBy(passes, pass => pass.id);

console.log(sorted[sorted.length-1]); // part 1 answer

//part 2 answer
let i = 1;
while(true) {
    if(sorted[i].id + 1 != sorted[i+1].id){console.log(`My seat id: ${sorted[i].id + 1}`); break;}
    i += 1;
};

