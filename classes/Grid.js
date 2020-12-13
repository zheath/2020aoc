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
        for(var yOffset = -1; yOffset <= 1; yOffset++){
            for( var xOffset = -1; xOffset <= 1; xOffset++) {
                if(xOffset != 0 || yOffset != 0){//ignore given point
                    if(this.inBounds({x: point.x + xOffset, y: point.y + yOffset})){
                        const node = this.nodes[point.y + yOffset][point.x + xOffset];
                        if(node.getType() == 'SEAT'){
                            output.push(node);
                        }                        
                    }
                }
            }
        }
        return output;
    }
    print(){
        this.nodes.forEach(row => console.log(row.join(",")))
    }
}

module.exports = Grid;