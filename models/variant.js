const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    SKU: { type: String, required: true },
    additionalCost: { type: Number, required: true },
    stockCount: { type: Number, required: true }
    });

variantSchema.virtual('url').get(function() {
    return '/api/variant/' + this._id;
});

module.exports = mongoose.model('Variant', variantSchema);