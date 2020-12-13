const _ = require('lodash');

class Grid {
    constructor(rows, cols, data){
        this.rows = rows;
        this.cols = cols;
        this.nodes = data;
    }
    setNode(posn, value){ this.nodes[posn.y][posn.x] = value }
    forEachCell(fn){ this.nodes.forEach((row, rowNum) => { row.forEach((cellValue, colNum) => fn(cellValue, {y: rowNum, x: colNum})) }) }
    inBounds(point){
        const left = 0;
        const top = 0;
        const right = this.nodes[0].length;
        const bottom = this.nodes.length;
        return point.x >= left && point.x < right && point.y >= top && point.y < bottom;
    }
    getAdjacents(point){
        const output = [];
        const directions = [1,2,3,4,5,6,7,8];
        directions.forEach(dir => {
            const seat = this.findFirstSeat(point, dir);
            if(!_.isEmpty(seat)){output.push(seat)}
        })
        return output;
    }
    print(){
        this.nodes.forEach(row => console.log(row.join(",")))
    }
    findFirstSeat(point, direction){
        let output = {};
        let nextPoint = {...point};
        //console.log('');
        //console.log(`Starting point: ${JSON.stringify(nextPoint)}`)
        while(true){
            switch(direction){
                case 1: nextPoint = {x: nextPoint.x, y: nextPoint.y - 1}; break; //up
                case 2: nextPoint = {x: nextPoint.x + 1, y: nextPoint.y - 1}; break; //up-right
                case 3: nextPoint = {x: nextPoint.x + 1, y: nextPoint.y}; break; //right
                case 4: nextPoint = {x: nextPoint.x + 1, y: nextPoint.y + 1}; break; //down-right
                case 5: nextPoint = {x: nextPoint.x, y: nextPoint.y + 1}; break; //down
                case 6: nextPoint = {x: nextPoint.x - 1, y: nextPoint.y + 1}; break; //down-left
                case 7: nextPoint = {x: nextPoint.x - 1, y: nextPoint.y}; break; //left
                case 8: nextPoint = {x: nextPoint.x - 1, y: nextPoint.y - 1}; break; //up-left
                default: throw new Error('Unknown direction!')
            }
            if(!this.inBounds(nextPoint)){/*(console.log(`Out of bounds for ${direction}.`);*/return {}};
            output = this.nodes[nextPoint.y][nextPoint.x];
            if(output.getType() == 'SEAT'){
                //console.log(`Found seat going ${direction} at point ${JSON.stringify(nextPoint)}.`);
                if(output.isOccupied()){ return output };
                return {};
            }
        }
    }
}

module.exports = Grid;