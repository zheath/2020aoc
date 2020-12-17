const _ = require("lodash");

class Point3d {
    constructor(point){
        this.dispId = `(${point.x}, ${point.y}, ${point.z})`;
        this.point = point;
        this.x = point.x;
        this.y = point.y;
        this.z = point.z;
    }
    getNeighbors(){
        const cube = [];
        for(let xOffset = -1; xOffset <= 1; xOffset++){
            for(let yOffset = -1; yOffset <= 1; yOffset++){
                for(let zOffset = -1; zOffset <= 1; zOffset++){
                    const pObj = {x: this.x + xOffset, y: this.y + yOffset, z: this.z + zOffset};
                    if(!_.isEqual(this.point, pObj)){cube.push(pObj)};
                }                
            }
        }
        return cube;
    }
}

module.exports = Point3d;