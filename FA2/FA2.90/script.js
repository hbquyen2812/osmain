class Pet {
    #name;
    #age;
    #type;

    constructor(name, age, type) {
        this.#name = name;
        this.#age = age;
        this.#type = type;
    }

    getInfo() {
        return `${this.#name} - Age: ${this.#age} years - Type: ${this.#type}`;
    }
}

class Dog extends Pet {
    #breed;

    constructor(name, age, breed) {
        super(name, age, "Dog");
        this.#breed = breed;
    }

    getInfo() {
        return `${super.getInfo()} - Breed: ${this.#breed}`;
    }
}

class Cat extends Pet {
    #color;

    constructor(name, age, color) {
        super(name, age, "Cat");
        this.#color = color;
    }

    getInfo() {
        return `${super.getInfo()} - Color: ${this.#color}`;
    }
}

// Danh sách chứa cả chó và mèo
const pets = [];

const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const typeInput = document.getElementById("typeInput");
const detailInput = document.getElementById("detailInput");
const detailLabel = document.getElementById("detailLabel");
const addPetButton = document.getElementById("addPetButton");
const petList = document.getElementById("petList");

function updateDetailInput() {
    if (typeInput.value === "dog") {
        detailLabel.textContent = "Breed:";
    } else {
        detailLabel.textContent = "Color:";
    }

    // Xóa thông tin riêng khi đổi loại
    detailInput.value = "";
}

function displayPets() {
    petList.replaceChildren();

    for (const pet of pets) {
        const paragraph = document.createElement("p");

        paragraph.textContent = pet.getInfo();

        petList.appendChild(paragraph);
    }
}

function addPet() {
    const name = nameInput.value.trim();
    const ageText = ageInput.value.trim();
    const type = typeInput.value;
    const detail = detailInput.value.trim();

    if (name === "" || ageText === "" || detail === "") {
        alert("Vui lòng nhập đầy đủ thông tin thú cưng.");
        return;
    }

    const age = Number(ageText);

    if (!Number.isFinite(age) || age < 0) {
        alert("Tuổi phải là số không âm.");
        return;
    }

    let pet;

    if (type === "dog") {
        pet = new Dog(name, age, detail);
    } else if (type === "cat") {
        pet = new Cat(name, age, detail);
    } else {
        alert("Loại thú cưng không hợp lệ.");
        return;
    }

    pets.push(pet);
    displayPets();

    // Xóa các ô nhập
    nameInput.value = "";
    ageInput.value = "";
    detailInput.value = "";

    nameInput.focus();
}

typeInput.addEventListener("change", updateDetailInput);
addPetButton.addEventListener("click", addPet);