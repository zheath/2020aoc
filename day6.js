const CustomsDeclaration = require('./CustomsDeclaration');
const print = require('./helpers/print');
const getFileData = require('./helpers/getFileData');
const _ = require("lodash");

const input = getFileData('/day6_real.txt','\n\n').map(el => el.split('\n'));
const cds = [];
input.forEach(answer => {
    const cd = new CustomsDeclaration(answer);
    cds.push(cd);
})
console.log(_.reduce(cds, (tot, cd) => tot + cd.yesAnswersAny, 0)); //part 1
console.log(_.reduce(cds, (tot, cd) => tot + cd.yesAnswersAll, 0)); //part 2
