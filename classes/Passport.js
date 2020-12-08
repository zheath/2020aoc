const print = require("./helpers/print");
const _ = require("lodash");

function validHeight(height){
    console.log(`Testing Height: ${height}`);
    if(!(/^\d{2}in$/i.test(height) || /^\d{3}cm$/i.test(height))){ console.log('invalid height format'); return false; };
    const unit = height.slice(-2);
    const value = height.slice(0, -2);
    console.log('Value',value,'Unit',unit);
    switch(unit){
        case 'cm':
            if(!(value >= 150 && value <= 193)){ console.log('invalid cm height value'); return false; }
            break;
        case 'in':
            if(!(value >= 59 && value <= 76)){ console.log('invalid in height value'); return false; }
            break;
    }
    return true;
}

function isValidData(data) {
    //print(['Testing Data',data])
    if(!(parseInt(data.byr) >= 1920 & parseInt(data.byr) <= 2002)){ console.log('invalid byr'); return false; };
    if(!(parseInt(data.iyr) >= 2010 & parseInt(data.iyr) <= 2020)){ console.log('invalid iyr'); return false };
    if(!(parseInt(data.eyr) >= 2020 & parseInt(data.eyr) <= 2030)){ console.log('invalid eyr'); return false };
    if(!validHeight(data.hgt)){ console.log('invalid hgt'); return false };
    if(!/^#[a-z0-9]{6}$/.test(data.hcl)){ console.log('invalid hcl'); return false };
    if(!['amb','blu','brn','gry','grn','hzl','oth'].includes(data.ecl)){ console.log('invalid ecl'); return false };
    if(!/^\d{9}$/.test(data.pid)){ console.log('invalid pid'); return false };
    return true;
}

class Passport {
    constructor(str){
        this.data = str
    }

    parse() { 
        return JSON.parse('{"'+this.data.replace(/:/g,'":"').replace(/ /g,'", "')+'"}');
    }

    isValid() {
        const data = this.parse();
        const dataKeys = Object.keys(data);
        let valid = false;
        //check for valid fields first
        if(dataKeys.length == 7 && !dataKeys.includes('cid')) {
            valid = true;
        } else if (dataKeys.length == 8) {
            valid = true;
        } else {
            valid = false;
        }
        if(valid){
            //check for valid field data
            return isValidData(data);
        }
        return false;
    }
}

module.exports = Passport;