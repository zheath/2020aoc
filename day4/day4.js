const _ = require("lodash");
const inputs = require("./day4_input");
const Passport = require("./Passport");
const print = require("./helpers/print");

const passports = inputs.real.split("[[NEW]]");
const valid = [];
const invalid = [];

passports.forEach(passport => {
    const p = new Passport(passport)
    if(p.isValid()){
        valid.push(p);
    } else {
        invalid.push(p);
    }
});

print(['Answer',`Valid Count: ${valid.length}`, `Invalid Count: ${invalid.length}`])