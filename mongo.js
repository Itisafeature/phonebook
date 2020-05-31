const mongoose = require('mongoose');

const password = process.argv[2];

const url = `mongodb+srv://admin:${password}@phonebook-idhoy.mongodb.net/phonebook-app?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model('Person', personSchema);

if (process.argv.length > 3) {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
  });

  person.save().then(res => {
    console.log(`added ${person.name}: ${person.number} to the phonebook`);
    mongoose.connection.close();
  });
} else {
  Person.find().then(res => {
    console.log('Phonebook:');
    res.forEach(person => {
      console.log(`${person.name}: ${person.number}`);
    });
    mongoose.connection.close();
  });
}
