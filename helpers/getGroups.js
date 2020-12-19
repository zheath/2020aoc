function getGroups(str){
    const out = [];
    let openCount = 0;
    let start = -1;
    const test = str.split("");
    test.forEach((c, i) => {
        //console.log('Start:',start,'OpenCnt:',openCount, 'Position:', i);
        //console.log(`Current character: ${c}`)
        //if(start >= 0){ console.log(str.slice(start, i)) }
        if(c=='('){ openCount += 1; if(start < 0){ start = i } };
        if(c==')'){ openCount -= 1 }
        if(start >= 0 && openCount == 0){ out.push(str.slice(start, i+1)); start = -1; };
    })
    return out;
}

module.exports = getGroups;