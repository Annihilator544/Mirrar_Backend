const Product = require("../models/product");
const Variant = require("../models/variant");
const asyncHandler = require('express-async-handler');
const { body, validationResult } = require("express-validator");

exports.index = asyncHandler(async function(req, res, next) {   
    const products = await Product.find().populate('variant').exec();
    res.json(products);
});

exports.product_detail = asyncHandler(async function(req, res, next) {
    const product = await Product.findById(req.params.id).populate('variant').exec();
    res.json(product);
});

exports.create_get = asyncHandler(async function(req, res, next) {
    const products = await Product.find().populate('variant').exec();
    res.json(products);
});

exports.create_post = [
    body('name', 'Name must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('description', 'Description must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('price', 'Price must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('variant.*', 'Variant must not be empty.').trim().isLength({ min: 0 }).escape(),
    asyncHandler(async function(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json(errors.array());
        return;
    }
    else {
        const product = new Product({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            variant: typeof req.body.variant === "undefined" ? [] : req.body.variant
        });
        await product.save();
        res.redirect(product.url);
    }
}),
];

exports.delete_get = asyncHandler(async function(req, res, next) {
    const variant = await Variant.find({ product: req.params.id })
    res.json(variant);
});

exports.delete_post = asyncHandler(async function(req, res, next) {
    const Variant =await Variant.find({ product: req.params.id });
    for (let i = 0; i < Variant.length; i++) {
        await Variant.findByIdAndRemove(Variant[i]._id);
    }
    await Product.findByIdAndRemove(req.params.id);
    res.redirect('/api');
});

exports.update_get = asyncHandler(async function(req, res, next) {
    res.json(await Product.findById(req.params.id));
});

exports.update_post =[
    (req, res, next) => {
    if(!Array.isArray(req.body.variant)){
        req.body.variant = typeof req.body.variant === "undefined" ? [] : new Array(req.body.variant);
    }
    next();
    },
    body('name', 'Name must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('description', 'Description must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('price', 'Price must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('variant.*', 'Variant must not be empty.').trim().isLength({ min: 0 }).escape(),   
    asyncHandler(async function(req, res, next) {
    const errors = validationResult(req);
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        variant: typeof req.body.variant === "undefined" ? [] : req.body.variant,
        _id: req.params.id
    });
    if (!errors.isEmpty()) {
        res.json(errors.array());
        return;
    }
    else {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, product, {});
        res.redirect(updatedProduct.url);
    }
}),
];

