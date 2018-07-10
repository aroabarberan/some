class Array {

    constructor(values) {
        this.values = values
    }

    myMap(method) {
        const elemets = []
        this.values.forEach(e => elemets.push(method(e)));
        return elemets
    }

    //TODO
    myFilter() {
        return "ble"
    }

    //TODO
    myReduce() {
        return "bli"
    }
}

const data = [{ name: 'Aroa', age: 23 }, { name: 'Ivan', age: 26 }]
const arrayValues = new Array(data);

const result = arrayValues.myMap(person => person.age > 25)
console.log(result)

// var patatin = data.map((param) => param.age > 25)
// console.log(patatin)