import { User } from "./user.js";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function fetchUsers() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Không thể tải danh sách người dùng");
    }

    const data = await response.json();

    return data.map(item => {
        return new User(
            item.id,
            item.name,
            item.username,
            item.email,
            item.phone,
            item.website
        );
    });
}

export function filterUsersByName(users, name) {
    return users.filter(user =>
        user.name.toLowerCase().includes(name.toLowerCase())
    );
}