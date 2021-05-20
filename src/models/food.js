'use strict';

const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    main: { type: String, required: true },
    soup: { type: String }
});

const foodModel = mongoose.model('Food', foodSchema);

module.exports = foodModel;