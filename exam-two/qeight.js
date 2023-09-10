class Product{
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalPrice(){
        return this.price * this.quantity;
    }
}


const product1 = new Product("Laptop", 1000, 3);
const product2 = new Product("Laptop", 2000, 4);

console.log(product1.getTotalPrice());
console.log(product2.getTotalPrice());