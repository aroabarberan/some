class Array {

    constructor(values) {
        this.values = values
    }

    myMap(method) {
        const elements = []
        this.values.forEach(e => elements.push(method(e)));
        return elements
    }

    //TODO
    myFilter(method) {
        const elements = []
        this.values.forEach(e => { if (method(e)) elements.push(e) });
        return elements
    }

    //TODO
    myReduce() {
        return "bli"
    }
}

const data = [{ name: 'Aroa', age: 23 }, { name: 'Ivan', age: 26 }]
const arrayValues = new Array(data);


//  My map
console.log("\nMY MAP")
const resultsMyMap = arrayValues.myMap(person => person.age > 25)
console.log(resultsMyMap)

var resultsOriginMap = arrayValues.values.map(params => params.age > 25)
console.log(resultsOriginMap)


//  My filter
console.log("\nMY FILTER")
const resultsMyFilter = arrayValues.myFilter(person => person.age > 25)
console.log(resultsMyFilter)

var resultsOriginFilter = arrayValues.values.filter(params => params.age > 25)
console.log(resultsOriginFilter)

