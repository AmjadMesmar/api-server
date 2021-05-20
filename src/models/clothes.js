'use strict';

const mongoose = require('mongoose');

const clothesSchema = new mongoose.Schema({
    top: { type: String, required: true },
    bottom: { type: String }
});

const clothesModel = mongoose.model('Clothes', clothesSchema);

module.exports = clothesModel;