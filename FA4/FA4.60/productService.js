import { Product } from "./product.js";

const API_URL = "https://fakestoreapi.com/products";

export async function fetchProducts() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Không thể tải dữ liệu sản phẩm");
    }

    const data = await response.json();

    return data.map(item => {
        return new Product(
            item.id,
            item.title,
            item.price,
            item.description,
            item.category,
            item.image
        );
    });
}

export function filterProductsByCategory(products, category) {
    if (category === "all") {
        return products;
    }

    return products.filter(product => product.category === category);
}