import Product from "./product.js";

class ProductList {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        if (product instanceof Product) {
            this.products.push(product);
        }
    }

    *getProducts() {
        for (const product of this.products) {
            yield product;
        }
    }

    [Symbol.iterator]() {
        return this.getProducts();
    }
}

export default ProductList;