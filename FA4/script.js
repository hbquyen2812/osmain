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

function getPost() {
    fetch(`${baseUrl}/1`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            showResult(data);
        })
        .catch(error => {
            console.log(error);
        });
}

function getAllPosts() {
    fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            showResult(data);
        })
        .catch(error => {
            console.log(error);
        });
}

function createPost() {
    const newPost = {
        title: "foo",
        body: "bar",
        userId: 1
    };

    fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            showResult(data);
        })
        .catch(error => {
            console.log(error);
        });
}

function updatePost() {
    const updatedPost = {
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1
    };

    fetch(`${baseUrl}/1`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedPost)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            showResult(data);
        })
        .catch(error => {
            console.log(error);
        });
}

function deletePost() {
    fetch(`${baseUrl}/1`, {
        method: "DELETE"
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            showResult(data);
        })
        .catch(error => {
            console.log(error);
        });
}