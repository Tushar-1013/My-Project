const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
    id: { type: String, required: true },
    sequence_value: { type: Number, required: true }
});

const Counter = mongoose.model('Counter', counterSchema);
module.exports = Counter;