const _name = Symbol("name");
const _price = Symbol("price");
const _category = Symbol("category");

class Product {
    constructor(name, price, category) {
        this[_name] = name;
        this[_price] = price;
        this[_category] = category;
    }

    getName() {
        return this[_name];
    }

    getPrice() {
        return this[_price];
    }

    getCategory() {
        return this[_category];
    }
}

export default Product;