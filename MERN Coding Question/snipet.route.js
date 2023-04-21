snipet.route.js

const router = require('express').Router();
let Snippet = require('../models/snippet.model');

router.route('/').get((req, res) => {
  Snippet.find()
    .then(snippets => res.json(snippets))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const language = req.body.language;
  const code = req.body.code;

  const newSnippet = new Snippet({
    title,
    language,
    code,
  });

  newSnippet.save()
    .then(() => res


