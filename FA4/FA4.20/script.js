const baseUrl = "https://jsonplaceholder.typicode.com/posts";

const btnGet = document.getElementById("btn-get");
const btnGetAll = document.getElementById("btn-get-all");
const btnCreate = document.getElementById("btn-create");
const btnUpdate = document.getElementById("btn-update");
const btnDelete = document.getElementById("btn-delete");
const result = document.getElementById("result");

btnGet.addEventListener("click", getPost);
btnGetAll.addEventListener("click", getAllPosts);
btnCreate.addEventListener("click", createPost);
btnUpdate.addEventListener("click", updatePost);
btnDelete.addEventListener("click", deletePost);

function showResult(data) {
    result.textContent = JSON.stringify(data, null, 2);
}

async function getPost() {
    try {
        const response = await fetch(`${baseUrl}/1`);
        const data = await response.json();

        console.log(data);
        showResult(data);
    } catch (error) {
        console.log(error);
    }
}

async function getAllPosts() {
    try {
        const response = await fetch(baseUrl);
        const data = await response.json();

        console.log(data);
        showResult(data);
    } catch (error) {
        console.log(error);
    }
}

async function createPost() {
    try {
        const newPost = {
            title: "foo",
            body: "bar",
            userId: 1
        };

        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        });

        const data = await response.json();

        console.log(data);
        showResult(data);
    } catch (error) {
        console.log(error);
    }
}

async function updatePost() {
    try {
        const updatedPost = {
            id: 1,
            title: "foo",
            body: "bar",
            userId: 1
        };

        const response = await fetch(`${baseUrl}/1`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedPost)
        });

        const data = await response.json();

        console.log(data);
        showResult(data);
    } catch (error) {
        console.log(error);
    }
}

async function deletePost() {
    try {
        const response = await fetch(`${baseUrl}/1`, {
            method: "DELETE"
        });

        const data = await response.json();

        console.log(data);
        showResult(data);
    } catch (error) {
        console.log(error);
    }
}