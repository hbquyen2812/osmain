const btnLoad = document.getElementById("btn-load");
const userList = document.getElementById("user-list");

btnLoad.addEventListener("click", loadUsers);

async function loadUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Không thể tải dữ liệu");
        }

        const users = await response.json();

        displayUsers(users);
    } catch (error) {
        userList.innerHTML = `<p>${error.message}</p>`;
    }
}

function displayUsers(users) {
    let html = "";

    users.forEach(user => {
        html += `
            <div>
                <h3>${user.name}</h3>
                <p>Username: ${user.username}</p>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
                <p>Website: ${user.website}</p>
                <hr>
            </div>
        `;
    });

    userList.innerHTML = html;
}