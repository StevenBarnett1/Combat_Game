const { Item } = require('./item');

class Food extends Item {

  constructor(name, health,description) {
    super(name, description);
    this.health = health;
  }
}

module.exports = {
  Food,
};
