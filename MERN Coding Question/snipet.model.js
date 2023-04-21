snipet.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const snippetSchema = new Schema({
  title: { type: String, required: true },
  language: { type: String, required: true },
  code: { type: String, required: true },
}, {
  timestamps: true,
});

const Snippet = mongoose.model('Snippet', snippetSchema);

module.exports = Snippet;