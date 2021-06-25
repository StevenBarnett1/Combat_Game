const { Food } = require('./food');

class Character {

  constructor(name, description, currentRoom) {
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
    this.items = [];
    this.health = 100;
    this.strength = 10;

  }

  applyDamage(amount) {
    this.health-=amount
    if(this.health<=0)this.die()

  }


  die() {
      this.currentRoom.items = this.items
      this.items = [];
      this.currentRoom = null
  }


  eatItem(itemName) {

    this.items.filter((item, i) => {
      if (item.name === itemName && item instanceof Food) {
        this.health += item.health
        this.items.splice(i, 1);
        console.log(`You just ate ${item}`);
      }
    });

  }

}

module.exports = {
  Character,
};
