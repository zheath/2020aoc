class Seat {
    constructor(value){
        this.value = value;
    }
    getType(){ return this.value == '.' ? 'FLOOR' : 'SEAT' }
    isOccupied(){ return this.value == '#' };
    occupy(){ this.value = '#' }
    vacate(){ this.value = 'L' }
}

module.exports = Seat;