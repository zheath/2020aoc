function fillFloat(list){
    //console.log(list);
    const temp = [];
    if(list[0].indexOf('X') < 0){return list}; //base case
    list.forEach(addr => {        
        temp.push(addr.replace('X',0))
        temp.push(addr.replace('X',1))
    })
    return fillFloat(temp);
}

module.exports = fillFloat;