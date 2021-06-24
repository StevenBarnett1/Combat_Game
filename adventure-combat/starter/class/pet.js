let {Character} = require("./character.js")

class Pet extends Character{
    constructor(name,description){
        super(name,description);
        this.health = 50;
    }
}


module.exports = {Pet}
