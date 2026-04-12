interface User {
    id: number;
    name: string;
    email: string;
    isActive?: boolean;
}

const user1: User = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    // isActive: true // Optional property

};

interface Product {
    readonly id: number;
    name: string;
    price: number;
}

const product1: Product = {
    id: 101,
    name: "Laptop",
    price: 999.99
};

// product1.id = 102; // Error: Cannot assign to 'id' because it is a read-only property.

interface Discountable {
    applyDiscount(discount: number): number;
}

class Item implements Discountable {
    constructor(public name: string, public price: number) {}

    applyDiscount(discount: number): number {
        return this.price - (this.price * discount / 100);
    }
}

const item1 = new Item("Smartphone", 499.99);
console.log(item1.applyDiscount(10)); // Outputs the price after applying a 10% discount

interface Discountable2 {
    (price:number):number;
} 

const applyDiscount: Discountable2 = (price: number) => {
    return price - (price * 0.1); // Applying a 10% discount
};

console.log(applyDiscount(200)); // Outputs the price after applying a 10% discount

interface Coffee{
    start():void;
    stop():void;
}

const myCoffeeMachine: Coffee = {
    start() {
        console.log("Coffee machine started.");
    },
    stop() {
        console.log("Coffee machine stopped.");
    }
};

myCoffeeMachine.start(); // Outputs: Coffee machine started.
myCoffeeMachine.stop();  // Outputs: Coffee machine stopped.

interface UserProfile {
    name:string;
}

interface UserProfile {
  age: number;
}


const userProfile: UserProfile = {
    name:'Abdul',
    age: 30
}

interface A {a:string};
interface B {b:number};

interface C extends A, B {}


