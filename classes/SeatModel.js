const Grid = require("../classes/Grid");
const Seat = require("../classes/Seat");

function buildGrid(data) {
    const rowCount = data.length;
    const colCount = data[0].length;
    //console.log('Rows:',rowCount,'Columns:',colCount);
    const gridData = data.map(row => row.map(cell => new Seat(cell)));
    const grid = new Grid(rowCount, colCount, gridData);
    return grid;
}

class SeatModel {
    constructor(data){
        this.seatGrid = buildGrid(data)
    }

    init() { //initialize by occupying all seats
        this.seatGrid.forEachCell(seat => {if(seat.getType()=='SEAT'){seat.occupy()}});
    }

    numOccupied() {
        let count = 0;
        this.seatGrid.forEachCell(seat => {count += seat.isOccupied() ? 1 : 0})
        return count;
    }

    transition() {
        const seatsToFill = [];
        const seatsToVacate = [];
        this.seatGrid.forEachCell((seat, posn) => {
            //console.log('Processing transition');
            //console.log(seat);
            //console.log(posn);
            if(seat.getType() == 'SEAT'){
                const occAdj = this.seatGrid.getAdjacents(posn);
                //if(posn.y == 0){console.log(JSON.stringify(posn) + ' ' + JSON.stringify(occAdj))}
                if(seat.isOccupied()){
                    if(occAdj.length >= 5){
                        //if(posn.y == 0){console.log('adding to vacate list')};
                        seatsToVacate.push(seat)
                    }
                } else {
                    if(occAdj.length == 0){
                        //if(posn.y == 0){console.log('adding to fill list')};
                        seatsToFill.push(seat)
                    }
                }
            }
        });
        const done = (seatsToVacate.length + seatsToFill.length) == 0;
        if(!done){
            seatsToFill.forEach(stf => stf.occupy());
            seatsToVacate.forEach(stv => stv.vacate());
        }
        return done;
    }

    printModel() {
        this.seatGrid.nodes.forEach(row => console.log(row.map(seat => seat.value).join("")));
    }
}

module.exports = SeatModel;