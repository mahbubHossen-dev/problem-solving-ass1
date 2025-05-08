function formatString(input: string, toUpper?: boolean) {
    let convertedInput = ''
    if (toUpper || toUpper === undefined) {
        convertedInput = input.toUpperCase()
    } else {
        convertedInput = input.toLowerCase()
    }

    return convertedInput
}


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
const myCar = new Car('Toyota', 2020, 'Corolla')



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


interface Product {
    name: string;
    price: number
}

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

