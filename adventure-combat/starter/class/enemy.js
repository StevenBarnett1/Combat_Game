const {Character} = require('./character');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    super(name,description,currentRoom)
    this.cooldown = 3000;
    this.attackTarget = null;
  }

  setPlayer(player) {
    this.player = player;
  }

  //creating dark room, add lantern item, different light items
  //shops, armor

  randomMove() {

    let exitArray = Object.keys(this.currentRoom.exits)

    let randomIndex = Math.floor(Math.random()*exitArray.length)

    let direction = exitArray[randomIndex]

    let newRoom = this.currentRoom.exits[direction]

    this.currentRoom = newRoom
    
    this.cooldown = 3000;

    // resets cooldown when enemy moves to newRoom

  }

  takeSandwich() {
    // Fill this in
    let sandwich = this.currentRoom.items.filter(item => item.name === 'sandwich')[0];
    this.items.push(sandwich);
    console.log(`You picked up the sandwich!`)
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function() {
      this.cooldown = 0;
      this.act();
    };

    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    // Fill this in
    this.attackTarget.applyDamage(this.strength);
    this.cooldown = 3000;
  }

  // applyDamage(amount) {
  //   // Fill this in
  // }



  act() {
    if (this.health <= 0) {
      this.die();// Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else if (this.attackTarget) {
      this.attack();
    } else {
      this.scratchNose();
      this.rest();
    }

    // Fill this in
  }


  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }


}

module.exports = {
  Enemy,
};
