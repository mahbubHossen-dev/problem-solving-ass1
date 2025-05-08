function formatString(input: string, toUpper?: boolean) {
    let convertedInput = ''
    if (toUpper || toUpper === undefined) {
        convertedInput = input.toUpperCase()
    } else {
        convertedInput = input.toLowerCase()
    }

    return convertedInput
}

// console.log(formatString("Hello"))        // Output: "HELLO"
// console.log(formatString("Hello", true));   // Output: "HELLO"
// console.log(formatString("Hello", false));  // Output: "hello"

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const filterBooksByRating = items.filter(item => (item.rating >= 4))
    return filterBooksByRating
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
    const newArr = []
    for (const arr of arrays) {
        for (const ar of arr) {
            newArr.push(ar)
        }
    }
    return newArr
}

// console.log(concatenateArrays(["a", "b"], ["c"]));       // Output: ["a", "b", "c"]
// console.log(concatenateArrays([1, 2], [3, 4], [5], [5456454]));     // Output: [1, 2, 3, 4, 5]


// ---------------------------------------


function processValue(value: string | number): number {
    let length: number = 0;
    if (typeof value === 'string') {
        length = value.length
    }
    else if (typeof value === 'number') {
        length = value * 2
    }
    return length
}
// console.log(processValue("hello")) // Output: 5
// console.log(processValue(10));      // Output: 20

interface Product {
    name: string;
    price: number
}

const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

function getMostExpensiveProduct(products: Product[]): Product | null {

    if (products.length === 0) {
        return null
    }

    let price = 0
    let highestPriceProduct = products[0]
    for (const element of products) {
        if (element.price > price) {
            price = element.price
            highestPriceProduct = element
        }
    }
    return highestPriceProduct
}

// console.log(getMostExpensiveProduct(products));


// ------------------------------------------------------------------------


async function squareAsync(n: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        if (n > -1) {
            setTimeout(() => {
                resolve(n * n)
            }, 1000);
        } else {
            reject('Negative number not allowed')
        }
    })
}
// squareAsync(4).then(console.log);        // Output after 1s: 16
// squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed
// squareAsync(0).then(console.log);    // Output: Error: Negative number not allowed



class Vehicle {
    constructor(private make: string, private year: number) { }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`
    }
}

class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
        super(make, year)
    }
    getModel() {
        return `Model: ${this.model}`
    }
}

// const myCar = new Car('Toyota', 2025, 'Corolla')
// console.log(myCar.getInfo())
// console.log(myCar.getModel())



enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    } else {
        return "Weekday";
    }
}
console.log(getDayType(Day.Sunday))