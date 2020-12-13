const print = require('../helpers/print');

class Boat {
    constructor(){
        this.wpPosn = {x: 10, y: 1};
        this.btPosn = {x: 0, y: 0};
    }
    moveWaypoint(direction, units){
        console.log('');
        console.log(`Moving waypoint ${units} units ${direction}.`);
        console.log(`Waypoint position before move: ${JSON.stringify(this.wpPosn)}.`)
        switch(direction){
            case 'N':
                this.wpPosn.y += parseInt(units);
                break;
            case 'S':
                this.wpPosn.y -= parseInt(units);
                break;
            case 'W':
                this.wpPosn.x -= parseInt(units);
                break;
            case 'E':
                this.wpPosn.x += parseInt(units);
                break;
            default:
                throw new Error('Unknown direction: '+direction);
        }        
        console.log(`Waypoint position after move: ${JSON.stringify(this.wpPosn)}.`)
        return this.wpPosn;
    }
    moveShip(times){
        console.log('');
        console.log(`Moving ship ${times} times.`);
        console.log('WP Posn:', JSON.stringify(this.wpPosn));
        console.log('Position before move:',JSON.stringify(this.btPosn));
        this.btPosn.x += this.wpPosn.x * times;
        this.btPosn.y += this.wpPosn.y * times;
        console.log('Position after move:',JSON.stringify(this.btPosn));
        return this.btPosn;
    }
    rotateWaypoint(degrees){
        //clockwise is negative, countercw is positive
        console.log('');
        console.log(`Rotating the waypoint ${degrees} degrees.`)
        console.log(`Position before rotation: ${JSON.stringify(this.wpPosn)}`);
        const {x, y} = this.wpPosn;
        if([90, -270].includes(parseInt(degrees))){
            this.wpPosn.x = y * -1;
            this.wpPosn.y = x;
        };


        if([180, -180].includes(parseInt(degrees))){
            console.log('rotating 180 degrees.')
            this.wpPosn.x = x * -1;
            this.wpPosn.y = y * -1;
        };


        if([270, -90].includes(parseInt(degrees))){
            this.wpPosn.x = y;
            this.wpPosn.y = x * -1;
        };
        if(![90,-90,180,-180,270,-270].includes(parseInt(degrees))){
            console.log('**********************************')
            console.log('**********************************')
            console.log('**********************************')
            console.log(`Unknown degrees submitted for rotation! ${degrees}`);
            console.log('**********************************')
            console.log('**********************************')
            console.log('**********************************')
            throw new Error('unknown degrees');
        }

        console.log(`Position after rotation: ${JSON.stringify(this.wpPosn)}`);
        return this.wpPosn;
    };
    calcPosition(){
        return Math.abs(this.btPosn.x) + Math.abs(this.btPosn.y);
    }
}

module.exports = Boat;