import Product from "./product.js";
import ProductList from "./productList.js";

const productList = new ProductList();

const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const categoryInput = document.getElementById("category");
const addProductButton = document.getElementById("addProduct");
const productListDiv = document.getElementById("productList");

addProductButton.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const price = priceInput.value;
    const category = categoryInput.value.trim();

    if (!name || !price || !category) {
        alert("Please fill in all fields.");
        return;
    }

    const product = new Product(
        name,
        parseFloat(price),
        category
    );

    productList.addProduct(product);

    displayProducts();

    nameInput.value = "";
    priceInput.value = "";
    categoryInput.value = "";

    nameInput.focus();
});

function displayProducts() {
    productListDiv.innerHTML = "";

    for (const product of productList) {
        const productDiv = document.createElement("div");

        productDiv.textContent =
            `Name: ${product.getName()}, Price: ${product.getPrice()}, Category: ${product.getCategory()}`;

        productListDiv.appendChild(productDiv);
    }
}