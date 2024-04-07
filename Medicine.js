// models/Medicine.js
const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
    name: String,
    price: Number,
    // Add more fields as needed
});

module.exports = mongoose.model('Medicine', medicineSchema);
