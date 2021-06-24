const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {

    this.currentRoom.items.filter((item, i) => {
      if (itemName === item.name) this.items.push(item)
      this.currentRoom.items.splice(i, 1);
      console.log(`You just picked up ${this.item}`);
    });

  }

  dropItem(itemName) {

    this.items.filter((item, i) => {
      if (itemName === item.name) {
        this.items.splice(i, 1)
        this.currentRoom.items.push(item)
        console.log(`You just dropped ${this.item}`);
      }
    })
  }

  

  getItemByName(name) {
    let desiredItem;
    this.items = this.items.filter(item => {
      if (item.name === name) desiredItem = item;
      return !item.name === name;
      //If items name is not equal to name that we pass in, then that item will be added to
      //the this.items(array)
    })
    return desiredItem;

  }

  hit(name) {
    // Fill this in
    let enemies = this.currentRoom.getEnemies();
    let currentEnemy = enemies.filter(enemy => enemy.name === name) [0]
    currentEnemy.applyDamage(this.strength);
    currentEnemy.attackTarget = this;
  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
