class Vehicle {
    #name;
    #brand;
    #type;

    constructor(name, brand, type) {
        this.#name = name;
        this.#brand = brand;
        this.#type = type;
    }

    getInfo() {
        return `${this.#name} - Brand: ${this.#brand} - Type: ${this.#type}`;
    }
}

class Car extends Vehicle {
    #numberOfDoors;

    constructor(name, brand, numberOfDoors) {
        super(name, brand, "Car");
        this.#numberOfDoors = numberOfDoors;
    }

    getInfo() {
        return `${super.getInfo()} - Doors: ${this.#numberOfDoors}`;
    }
}

class Motorcycle extends Vehicle {
    #engineCapacity;

    constructor(name, brand, engineCapacity) {
        super(name, brand, "Motorcycle");
        this.#engineCapacity = engineCapacity;
    }

    getInfo() {
        return `${super.getInfo()} - Engine Capacity: ${this.#engineCapacity} cc`;
    }
}

// Danh sách chứa cả ô tô và xe máy
const vehicles = [];

const nameInput = document.getElementById("nameInput");
const brandInput = document.getElementById("brandInput");
const typeInput = document.getElementById("typeInput");
const detailInput = document.getElementById("detailInput");
const detailLabel = document.getElementById("detailLabel");
const addVehicleButton = document.getElementById("addVehicleButton");
const vehicleList = document.getElementById("vehicleList");

function updateDetailInput() {
    if (typeInput.value === "car") {
        detailLabel.textContent = "Number of Doors:";
        detailInput.min = "1";
        detailInput.step = "1";
    } else {
        detailLabel.textContent = "Engine Capacity (cc):";
        detailInput.min = "0";
        detailInput.step = "any";
    }

    detailInput.value = "";
}

function displayVehicles() {
    vehicleList.replaceChildren();

    for (const vehicle of vehicles) {
        const paragraph = document.createElement("p");

        paragraph.textContent = vehicle.getInfo();

        vehicleList.appendChild(paragraph);
    }
}

function addVehicle() {
    const name = nameInput.value.trim();
    const brand = brandInput.value.trim();
    const type = typeInput.value;
    const detailText = detailInput.value.trim();

    if (name === "" || brand === "" || detailText === "") {
        alert("Vui lòng nhập đầy đủ thông tin xe.");
        return;
    }

    const detail = Number(detailText);
    let vehicle;

    if (type === "car") {
        if (!Number.isInteger(detail) || detail <= 0) {
            alert("Số cửa phải là số nguyên dương.");
            return;
        }

        vehicle = new Car(name, brand, detail);
    } else if (type === "motorcycle") {
        if (!Number.isFinite(detail) || detail <= 0) {
            alert("Dung tích động cơ phải là số lớn hơn 0.");
            return;
        }

        vehicle = new Motorcycle(name, brand, detail);
    } else {
        alert("Loại xe không hợp lệ.");
        return;
    }

    vehicles.push(vehicle);
    displayVehicles();

    // Xóa các ô nhập
    nameInput.value = "";
    brandInput.value = "";
    detailInput.value = "";

    nameInput.focus();
}

typeInput.addEventListener("change", updateDetailInput);
addVehicleButton.addEventListener("click", addVehicle);