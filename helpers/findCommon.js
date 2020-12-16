const _ = require("lodash");
function findCommon(test) {
    const num = test.length;
    let output = [];
    const values = test.reduce((arr, t) => arr + ',' + t.join(","), '').split(",").filter(val => val.length > 0);
    const map = {};
    const keys = _.uniq(values);
    keys.forEach(key => map[key] = 0);
    values.forEach(val => map[val] += 1);
    keys.forEach(key => {
        if(map[key] == num){
            output.push(key);
        }
    })
    return output
}

module.exports = findCommon;