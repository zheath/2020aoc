const print = require("./helpers/print")
class Password {
    constructor(str){
        this.pwd = str
    }

    parse() {
        const dashIndex = this.pwd.indexOf('-');
        const spaceIndex = this.pwd.indexOf(' ');
        const colnIndex = this.pwd.indexOf(':');
        //print(["Indexes",dashIndex,spaceIndex,colnIndex])
        return {
            min: this.pwd.substring(0,dashIndex),
            max: this.pwd.substring(dashIndex+1,spaceIndex),
            sch: this.pwd.substring(spaceIndex+1,colnIndex),
            pwd: this.pwd.substring(colnIndex+2)
        };
    }

    isValid() {
        const parsed = this.parse();
        const pwdArray = parsed.pwd.split("");
        const test = (pwdArray[parsed.min-1] == parsed.sch ? 1 : 0) + (pwdArray[parsed.max-1] == parsed.sch ? 1 : 0)
        return test === 1;
    }
}

module.exports = Password;