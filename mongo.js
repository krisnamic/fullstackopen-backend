const mongoose = require('mongoose')

// eslint-disable-next-line no-undef
if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  // eslint-disable-next-line no-undef
  process.exit(1)
}

// eslint-disable-next-line no-undef
const password = process.argv[2]
// eslint-disable-next-line no-undef
const name = process.argv[3]
// eslint-disable-next-line no-undef
const number = process.argv[4]

const url =
  `mongodb+srv://michael:${password}@cluster0.acco8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: name,
  number: number,
})


// eslint-disable-next-line no-undef
if (process.argv.length === 5) {
  // eslint-disable-next-line no-unused-vars
  person.save().then(result => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
// eslint-disable-next-line no-undef
} else if (process.argv.length === 3) {
  console.log('phonebook:')
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
} else {
  console.log('Invalid Input')
}