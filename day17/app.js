const Point3d = require("../classes/Point3d");
const getFileData = require('../helpers/getFileData');
const _ = require("lodash");

let activeList = getFileData('/day17/test1.txt','\n').map((row, yInd) => {
    const rowArr = row.split("").map((cell, xInd) => cell == "." ? JSON.stringify({}) : JSON.stringify({x: xInd, y: yInd, z: 0})).filter(c => !_.isEmpty(JSON.parse(c)));
    return rowArr.join("|");
}).join("|").split("|").map(p => new Point3d(JSON.parse(p)));

let simResult = [];

for(let iteration = 1; iteration <= 6; iteration++){
    activeList.forEach(point => {
        const n = point.getNeighbors();
        const inactiveNeighbors = n.filter(pObj => activeList.filter(p => _.isEqual(p.point,pObj)).length == 0);
        //active > active case
        const activeNeighborCount = n.length - inactiveNeighbors.length;
        //console.log(`Active Neighbors for ${point.dispId}`)
        //console.log(activeNeighborCount);
        if([2, 3].includes(activeNeighborCount)){simResult.push(point)};
    
        //inactive > active case    
        inactiveNeighbors.forEach(p => {
            const nPoint = new Point3d(p);
            const newActiveCount = nPoint.getNeighbors().filter(pObj => activeList.filter(p => _.isEqual(p.point, pObj)).length > 0).length;
            if(newActiveCount === 3 && simResult.filter(simP => simP.dispId == nPoint.dispId).length == 0){simResult.push(nPoint)}
        })
    })
    
    simResult.filter(p => p.z == 0).forEach(res => console.log(res.dispId))
    //simResult.forEach(res => console.log(res.dispId))
    console.log(simResult.length);
    activeList = simResult;
}



