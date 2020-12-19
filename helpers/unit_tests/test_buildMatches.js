const buildMatches = require("../buildMatches");

const str = "((8 + 8) + (7 + 4) + 5 * (9 * 2 * 9 * 8) * 5 * (2 + 3 * 3 + 2 * 5)) + 5 * 7 * (4 * 7 + (3 + 3 * 5 * 5 + 5 + 2) + 8 * (2 + 2 + 9 + 6 + 3)) + 2";
const stripped = str.replace(/ /g, "");

console.log(buildMatches(stripped));