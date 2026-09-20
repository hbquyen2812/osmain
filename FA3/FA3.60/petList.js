import { Pet } from "./pet.js";

class PetList {
    constructor() {
        this.pets = [];
    }

    addPet(pet) {
        if (pet instanceof Pet) {
            this.pets.push(pet);
        }
    }

    *getPets() {
        for (const pet of this.pets) {
            yield pet;
        }
    }

    [Symbol.iterator]() {
        return this.getPets();
    }
}

export default PetList;