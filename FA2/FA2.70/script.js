class Employee {
    #name;
    #age;
    #position;

    constructor(name, age, position) {
        this.#name = name;
        this.#age = age;
        this.#position = position;
    }

    getInfo() {
        return `${this.#name} - Age: ${this.#age} - Position: ${this.#position}`;
    }
}

class TechnicalStaff extends Employee {
    #technicalSkill;

    constructor(name, age, position, technicalSkill) {
        super(name, age, position);
        this.#technicalSkill = technicalSkill;
    }

    getInfo() {
        return `${super.getInfo()} - Technical Skill: ${this.#technicalSkill}`;
    }
}

class AdministrativeStaff extends Employee {
    #administrativeTask;

    constructor(name, age, position, administrativeTask) {
        super(name, age, position);
        this.#administrativeTask = administrativeTask;
    }

    getInfo() {
        return `${super.getInfo()} - Administrative Task: ${this.#administrativeTask}`;
    }
}

// Danh sách chứa cả hai loại nhân viên
const employees = [];

const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const positionInput = document.getElementById("positionInput");
const typeInput = document.getElementById("typeInput");
const detailInput = document.getElementById("detailInput");
const detailLabel = document.getElementById("detailLabel");
const addEmployeeButton = document.getElementById("addEmployeeButton");
const employeeList = document.getElementById("employeeList");

function updateDetailInput() {
    if (typeInput.value === "technical") {
        detailLabel.textContent = "Technical Skill:";
    } else {
        detailLabel.textContent = "Administrative Task:";
    }

    // Xóa dữ liệu riêng khi đổi loại nhân viên
    detailInput.value = "";
}

function displayEmployees() {
    employeeList.replaceChildren();

    for (const employee of employees) {
        const paragraph = document.createElement("p");

        paragraph.textContent = employee.getInfo();

        employeeList.appendChild(paragraph);
    }
}

function addEmployee() {
    const name = nameInput.value.trim();
    const ageText = ageInput.value.trim();
    const position = positionInput.value.trim();
    const type = typeInput.value;
    const detail = detailInput.value.trim();

    if (
        name === "" ||
        ageText === "" ||
        position === "" ||
        detail === ""
    ) {
        alert("Vui lòng nhập đầy đủ thông tin nhân viên.");
        return;
    }

    const age = Number(ageText);

    if (!Number.isInteger(age) || age <= 0) {
        alert("Tuổi phải là số nguyên dương.");
        return;
    }

    let employee;

    if (type === "technical") {
        employee = new TechnicalStaff(
            name,
            age,
            position,
            detail
        );
    } else if (type === "administrative") {
        employee = new AdministrativeStaff(
            name,
            age,
            position,
            detail
        );
    } else {
        alert("Loại nhân viên không hợp lệ.");
        return;
    }

    employees.push(employee);
    displayEmployees();

    // Xóa các ô nhập
    nameInput.value = "";
    ageInput.value = "";
    positionInput.value = "";
    detailInput.value = "";

    nameInput.focus();
}

typeInput.addEventListener("change", updateDetailInput);
addEmployeeButton.addEventListener("click", addEmployee);