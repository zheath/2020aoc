const inputs = require("./day2_input");
const print = require("./helpers/print");
const Password = require("./Password");
const fails = [];
const passes = [];

inputs.real.forEach(pwd => {
    //print(["Password", pwd]);
    const password = new Password(pwd);
    if(password.isValid()){
        passes.push(password);
    } else {
        fails.push(password);
    }
});

print(["Answers", `Passes: ${passes.length}`, `Fails ${fails.length}`]);