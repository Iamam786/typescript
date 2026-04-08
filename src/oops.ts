
class Chai{
    flavor:string;
    price:number;

    // constructor(flavor:string, price:number){
    //     this.flavor = flavor;
    //     this.price = price;
    // }

    constructor(flavor:string){
        this.flavor = flavor;
        this.price = 0;
    }

    // constructor(price:number){
    //     this.flavor = "Unknown";
    //     this.price = price;
    // }

    // constructor(){
    //     this.flavor = "Unknown";
    //     this.price = 0;
    // }
}

// const myChai = new Chai("Special Chai", 120);
const myChai = new Chai("Special Chai");
myChai.flavor = "Masala";
myChai.price = 100;

// type Coffee = {
//     flavor:string;
//     price:number;
// }

// const myCoffee:Coffee = {
//     flavor:"Espresso",
//     price: 150
// }

class Coffee{
    public flavor:string="Masala";
    private secretIngredient="Love";

    reveal(){
        // console.log(`The secret ingredient is ${this.secretIngredient}`);
        return `The secret ingredient is ${this.secretIngredient}`;
    }

}

const myCoffee = new Coffee();
console.log(myCoffee.flavor); // Accessible
// console.log(myCoffee.secretIngredient); // Error: Property 'secretIngredient' is private and only accessible within class 'Coffee'.
console.log(myCoffee.reveal()); // Accessible through method

class Shop{
    protected ShopName="Chaiwala";
}

class Branch extends Shop{
    displayShopName(){
        console.log(`Welcome to ${this.ShopName} branch!`);
    }
}

new Branch().displayShopName(); // Accessible through subclass method

class Beverage{
    #food = "water";
    getBeverage(){
        return `The beverage is made of ${this.#food}`;
    }
}

const myBeverage = new Beverage();
// console.log(myBeverage.#food); // Error: Private field '#food' must be declared in an enclosing class
console.log(myBeverage.getBeverage()); // Accessible through method 


class Juice{
    readonly flavor:string="Orange";

    constructor(flavor:string){
        this.flavor = flavor;
    }
}

const myJuice = new Juice("Apple");
console.log(myJuice.flavor); // Accessible
// myJuice.flavor = "Grape"; // Error: Cannot assign to 'flavor' because it is a read-only property.

class Tea{
    private _flavor:string="Masala";

    get flavor(){
        return this._flavor;
    }

    set flavor(newFlavor:string){
        if(newFlavor.length > 0){
            this._flavor = newFlavor;
        } else {
            console.log("Flavor cannot be empty.");
        }
    }
}

const myTea = new Tea();
console.log(myTea.flavor); // Accessing through getter
myTea.flavor = "Green"; // Setting through setter
console.log(myTea.flavor); // Accessing updated flavor through getter

// class CoffeeShop{
//     static shopName:string = "Brew Haven";

//     static displayShopName(){
//         console.log(`Welcome to ${CoffeeShop.shopName}!`);
//     }
// }

// CoffeeShop.displayShopName(); // Accessing static method without creating an instance

class CoffeeShop{
    static shopName:string = "Brew Haven";

 constructor(public location:string){
     console.log(`Welcome to ${CoffeeShop.shopName}!`);
 }
}

console.log(CoffeeShop.shopName);


abstract class Drink{
    abstract prepare():void;

}

class myDrink extends Drink{
    prepare(){
        console.log("Preparing the drink...");
    }
}

const mySpecialDrink = new myDrink();
mySpecialDrink.prepare(); // Accessible through subclass implementation

class Singleton{
    single(){}
};

class mySingleton {
    constructor(private singleton:Singleton){}

    make(){
        this.singleton.single();
    }
}