class Array {

  constructor(values) {
    this.values = values
  }

  myMap(method) {
    const elements = []
    this.values.forEach(e => elements.push(method(e)));
    return elements
  }

  myFilter(method) {
    const elements = []
    this.values.forEach(e => { if (method(e)) elements.push(e) });
    return elements
  }

  myReduce(method, valueInitial = 0) {
    let sum = 0
    for (let i = 0; i < this.values.length -1; i++) {
      if (i == 0) sum = valueInitial == 0 ? this.values[i] : valueInitial
      sum = method(sum, this.values[i + 1])
    }
    return sum
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

// My Reduce
console.log("\nMY REDUCE")
const numbers = new Array([1, 2, 2, 1]);
const resultsOriginMyReduce = numbers.myReduce((total, num) => { return total / num })
console.log(resultsOriginMyReduce)

const resultsOriginReduce = numbers.values.reduce((total, num) => { return total / num })
console.log(resultsOriginReduce)