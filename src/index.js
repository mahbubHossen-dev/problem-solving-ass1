"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function formatString(input, toUpper) {
    let convertedInput = '';
    if (toUpper || toUpper === undefined) {
        convertedInput = input.toUpperCase();
    }
    else {
        convertedInput = input.toLowerCase();
    }
    return convertedInput;
}
// console.log(formatString("Hello"))        // Output: "HELLO"
// console.log(formatString("Hello", true));   // Output: "HELLO"
// console.log(formatString("Hello", false));  // Output: "hello"
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
function filterByRating(items) {
    const filterBooksByRating = items.filter(item => (item.rating >= 4));
    return filterBooksByRating;
}
function concatenateArrays(...arrays) {
    const newArr = [];
    for (const arr of arrays) {
        for (const ar of arr) {
            newArr.push(ar);
        }
    }
    return newArr;
}
// console.log(concatenateArrays(["a", "b"], ["c"]));       // Output: ["a", "b", "c"]
// console.log(concatenateArrays([1, 2], [3, 4], [5], [5456454]));     // Output: [1, 2, 3, 4, 5]
// ---------------------------------------
function processValue(value) {
    let length = 0;
    if (typeof value === 'string') {
        length = value.length;
    }
    else if (typeof value === 'number') {
        length = value * 2;
    }
    return length;
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    let price = 0;
    let highestPriceProduct = products[0];
    for (const element of products) {
        if (element.price > price) {
            price = element.price;
            highestPriceProduct = element;
        }
    }
    return highestPriceProduct;
}
// console.log(getMostExpensiveProduct(products));
// ------------------------------------------------------------------------
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            if (n > -1) {
                setTimeout(() => {
                    resolve(n * n);
                }, 1000);
            }
            else {
                reject('Negative number not allowed');
            }
        });
    });
}
// squareAsync(4).then(console.log);        // Output after 1s: 16
// squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed
// squareAsync(0).then(console.log);    // Output: Error: Negative number not allowed
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`;
    }
}
// const myCar = new Car('Toyota', 2025, 'Corolla')
// console.log(myCar.getInfo())
// console.log(myCar.getModel())
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    const weekendDays = [Day.Saturday, Day.Sunday];
    if (weekendDays.includes(day)) {
        return 'Weekend';
    }
    else {
        return 'Weekday';
    }
    // console.log(weekendDays)
}
console.log(getDayType(Day.Sunday));
