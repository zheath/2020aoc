const _ = require('lodash');
const newArr = require('../helpers/newArr');

class Grid3d {
    constructor(initPlane){
        this.space = [initPlane];
        this.width = this.space[0][0].length;
        this.height = this.space[0].length;
        this.depth = this.space.length;
        this.origin = 0;
    }
    transitionSpace(){
        let changes = [];
        this.expandSpace();
        //this.printSpace();
        this.space.forEach((plane, zInd) => {
            this.space[zInd].forEach((row, yInd) => {
                row.forEach((cell, xInd) => {                    
                    const point = {x: xInd, y: yInd, z: zInd};
                    const activeCount = this.getNeighbors(point).reduce((acc, x) => acc + x,0);
                    //console.log(`Value at (${xInd}, ${yInd}, ${zInd}) = ${cell}. Active Count = ${activeCount}.`);
                    if(cell == 0 && activeCount == 3){ changes.push({p: point, value: 1}) }
                    if(cell == 1 && ![2,3].includes(activeCount)){ changes.push({p: point, value: 0}) }
                })
            })
        })
        this.writeChanges(changes);
    }
    inBounds(x, y, z){
        return x >= 0 && x < this.width && y >= 0 && y < this.height && z >= 0 && z < this.depth;
    }
    writeChanges(changes){
        //console.log(`Writing Changes!`);
        //console.log(changes);
        changes.forEach(c => {
            //console.log(`Changing ${JSON.stringify(c)}!`);
            //console.log(this.space[c.p.z][c.p.y][c.p.x]);
            this.space[c.p.z][c.p.y][c.p.x] = c.value;
            //this.printSpaceSlice(c.p.z);
        })
    }
    getNeighbors(p){
        const cube = [];
        for(let zOffset = -1; zOffset <= 1; zOffset++){
            for(let yOffset = -1; yOffset <= 1; yOffset++){
                for(let xOffset = -1; xOffset <= 1; xOffset++){                    
                    if(this.inBounds(p.x + xOffset, p.y + yOffset, p.z + zOffset)){
                        //console.log(`Test Point: (${p.x + xOffset}, ${p.y + yOffset}, ${p.z + zOffset})`);
                        if(zOffset != 0 || yOffset != 0 || xOffset != 0){
                            cube.push(this.space[p.z + zOffset][p.y + yOffset][p.x + xOffset]);
                        }
                    }
                }                
            }
        }
        return cube;
    }
    expandSpace(){
        //widen zero plane
        this.width += 2;
        this.height += 2;
        this.space.forEach((p, index) => {
            p.forEach(row => {row.unshift(0); row.push(0);})
            p.unshift(newArr(this.width, 0)); 
            p.push(newArr(this.width, 0)); 
        });

        //increase z depth
        this.depth += 2;
        this.origin += 1;
        //needed to create two because [...plane] was not duplicating vectors, so updates were wierd
        const newPlane1 = newArr(this.width, null).map(el => newArr(this.width, 0));
        const newPlane2 = newArr(this.width, null).map(el => newArr(this.width, 0));
        this.space.unshift(newPlane1);
        this.space.push(newPlane2);
    }
    printSpaceDimensions(){
        console.log(`Space is currently ${this.width}x${this.height}x${this.depth}`)
    }
    printSpaceSlice(zIndex){
        const s = this.space[zIndex];
        console.log('');
        console.log('***********************************');
        console.log(`Space slice for Z = ${zIndex}`);
        s.forEach(row => console.log(JSON.stringify(row)));
    }
    printSpace(){
        const keys = Object.keys(this.space);
        keys.forEach(key => this.printSpaceSlice(key));
    }
    countActive(){
        return this.space.reduce((a1, z) => a1 + z.reduce((a2, y) => a2 + y.reduce((a3, x) => a3+x,0),0),0);
    }
}

module.exports = Grid3d;