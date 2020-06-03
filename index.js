require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const Person = require('./models/person');

app.use(cors());
app.use(express.static('build'));
app.use(express.json());
morgan.token('body', function (req) {
  return JSON.stringify(req.body);
});
app.use(
  morgan(
    ':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'
  )
);

app.get('/api/persons', (req, res) => {
  Person.find().then(persons => {
    console.log(persons);
    res.json(persons);
  });
});

app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id).then(result => {
    res
      .status(200)
      .json({
        status: 'success',
        data: result,
      })
      .catch(err => next(err));
  });
});

app.put('/api/persons/:id', (req, res, next) => {
  const updatedPerson = {
    name: req.body.name,
    number: req.body.number,
  };

  Person.findOneAndUpdate({ _id: req.params.id }, updatedPerson, {
    new: true,
    runValidators: true,
    context: 'query',
  })
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => next(err));
});

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch(err => next(err));
});

app.get('/info', async (req, res) => {
  const markup = `
  <p>phonebook has info for ${await Person.countDocuments()} people</p>
  <p>${new Date()}</p>
  `;
  res.send(markup);
});

app.post('/api/persons', (req, res, next) => {
  const body = req.body;

  if (!body.name || !body.number)
    return res.status(400).json({ error: 'Must provide name and number' });

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  person
    .save()
    .then(person => {
      res.status(201).json({
        status: 'success',
        person,
      });
    })
    .catch(err => next(err));
});

const errorHandler = (error, req, res, next) => {
  console.log(error.name);
  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'Malformatted id' });
  }
  if (error.name === 'ValidationError') {
    console.log(error.message);
    return res.status(400).send({ error: error.message });
  }

  next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
