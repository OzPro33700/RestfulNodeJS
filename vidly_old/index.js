const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const genres = [
  { id: 1, name: 'genre1' },
  { id: 2, name: 'genre2' },
  { id: 3, name: 'genre3' },
];

app.get('/', (req, res) => {
  res.send(genres);
});

app.get('/vidly/api/:id', (req, res) => {
  const genre = genres.find((g) => g.id === parseInt(req.params.id));

  if (!genre)
    return res
      .status(404)
      .send('The requested genre for requested ID could not be found.');

  res.send(genre);
});

app.put('/api/vidly/:id', (req, res) => {
  const genre = genres.find((g) => g.id === parseInt(req.params.id));

  if (!genre)
    return res
      .status(404)
      .send('The requested genre for requested ID could not be found.');

  const result = validateGenre(req.body);
  const { error } = validateGenre(req.body);
  if (error)
    // Bad request
    return res.status(400).send(error.details[0].message);

  genre.name = req.body.name;
  res.send(genre);
});

app.post('/api/vidly', (req, res) => {
  const { error } = validateGenre(req.body);

  if (error) return res.status(400).send(error.details[0].message); // Bad request

  const genre = { id: genres.length + 1, name: req.body.name };
  genres.push(genre);
  res.send(genre);
});

app.delete('/vidly/api/:id', (req, res) => {
  const genre = genres.find((g) => g.id === parseInt(req.params.id));
  if (!genre)
    return res
      .status(404)
      .send('The requested genre for requested ID could not be found.');

  const index = genres.indexOf(genre);
  genres.splice(index, 1);

  res.send(genre);
});

// Define validation criteria
function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  return Joi.validate(genre, schema);
}

// Turn on the connection
const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}...`));
