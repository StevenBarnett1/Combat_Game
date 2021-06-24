const { expect } = require('chai');

const {Pet} = require("../class/pet.js")
const {Character} = require("../class/character")
const { Player } = require("../class/player.js");
const { Room } = require("../class/room.js");
const { Item } = require("../class/item.js");
const { Food } = require("../class/food.js");

describe("Pet", function () {

    beforeEach(function() {
        food = new Food("sandwich",10,"delicious sandwich")
        pet = new Pet("Bob","Bobcat")
    });
    it("Should have Name, Health, and Description attributes", function () {
        expect(pet.health).to.eq(50)
        expect(pet.name).to.eq("Bob")
        expect(pet.description).to.eq("Bobcat")
    });
    it("Should inherit from Character", function(){
        expect(pet instanceof Character).to.be.true
    });
    it("Should gain 10 health when eating a sandwich", function() {
        pet.items.push(food)
        pet.health = 40;
        pet.eatItem("sandwich")
        expect(pet.health).to.eq(50)
    });
})
