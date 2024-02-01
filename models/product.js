const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    variant : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Variant' }]
    });

productSchema.virtual('url').get(function() {
    return '/api/product/' + this._id;
});

module.exports = mongoose.model('Product', productSchema);

