const Product = require("../models/product");
const Variant = require("../models/variant");
const asyncHandler = require('express-async-handler');

exports.searchProduct = asyncHandler(async function(req, res, next) {
    const products = [];
    const variants = await Variant.find({name: new RegExp(req.params.name, 'i')}).exec();
    products.push(await Product.find({name: new RegExp(req.params.name, 'i')}).populate('variant').exec());
    for (let i = 0; i < variants.length; i++) {
        products.push(await Product.find({variant: variants[i]._id}).populate('variant').exec())
    }
    products.push(await Product.find({description: new RegExp(req.params.description, 'i')}).populate('variant').exec());
    res.json(products);
});

