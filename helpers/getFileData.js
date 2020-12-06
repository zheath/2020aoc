const fs = require('fs');
const path = require('path');

function getFileData(filePath, splitter) {
    console.log('current directory');
    console.log(path.join(__dirname, '..') + filePath);
    const text = fs.readFileSync(path.join(__dirname, '..') + filePath, {encoding:'utf8', flag:'r'});
    return text.split(splitter);
}

module.exports = getFileData;



