const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(cors());
app.use(express.static('build'));

app.use(express.json());
morgan.token('body', function (req, res) {
  return JSON.stringify(req.body);
});
app.use(
  morgan(
    ':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'
  )
);

let persons = [
  {
    name: 'Arto Hellas',
    number: '95894',
    id: 1,
  },
  {
    name: 'Ada Lovelace',
    number: '39-44-5323523',
    id: 2,
  },
  {
    name: 'Dan Abramov',
    number: '12-43-234345',
    id: 3,
  },
  {
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
    id: 4,
  },
];

app.get('/api/persons', (req, res) => {
  res.status(200).json(persons);
});

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(person => person.id === id);

  if (person) {
    res.status(200).json(person);
  } else {
    res.status(404).json({
      error: 'not found',
    });
  }
});

app.put('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  let updatedPerson = persons.find(person => person.id === id);
  updatedPerson = {
    name: req.body.name,
    number: req.body.number,
    id: id,
  };

  persons = persons.map(person =>
    person.id === updatedPerson.id ? updatedPerson : person
  );

  res.status(200).json(updatedPerson);
});

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter(person => person.id !== id);
  res.status(204).end();
});

app.get('/info', (req, res) => {
  const markup = `
  <p>phonebook has info for ${persons.length} people</p>
  <p>${new Date()}</p>
  `;
  res.send(markup);
});

const generateId = () => {
  return Math.floor(Math.random() * 200) + 1;
};
app.post('/api/persons', (req, res) => {
  const id = generateId();
  const body = req.body;

  if (!body.name || !body.number)
    return res.status(400).json({ error: 'Must provide name and number' });

  if (persons.find(person => person.name === body.name))
    return res.status(400).json({ error: 'Name must be unique' });

  const person = {
    name: req.body.name,
    number: req.body.number,
    id: id,
  };

  persons = persons.concat(person);
  res.status(201).json({
    status: 'success',
    person,
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
