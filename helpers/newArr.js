function newArr(size, fill){ 
    return new Array(size).fill(null).map(el => fill);
};

module.exports = newArr;