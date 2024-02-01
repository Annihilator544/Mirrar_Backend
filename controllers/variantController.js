const Product = require("../models/product");
const Variant = require("../models/variant");
const asyncHandler = require('express-async-handler');
const { body, validationResult } = require("express-validator");

exports.Variant_detail = asyncHandler(async function(req, res, next) {
    if(Variant.findById(req.params.id) === null){
        res.json("Variant not found");
    }
    const variant = await Variant.findById(req.params.id).exec();
    res.json(variant);
});

exports.create_get = asyncHandler(async function(req, res, next) {
    const variant = await Variant.find().exec();
    res.statusCode(200).json(variant);
});

exports.create_post = [
    body('name', 'Name must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('SKU', 'SKU must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('additionalCost', 'Additional Cost must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('stockCount', 'Stock Count must not be empty.').trim().isLength({ min: 1 }).escape(),
    asyncHandler(async function(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json(errors.array());
        return;
    }
    else {
        const variant = new Variant({
            name: req.body.name,
            SKU: req.body.SKU,
            additionalCost: req.body.additionalCost,
            stockCount: req.body.stockCount
        });
        await variant.save();
        res.redirect(variant.url);
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
    body('name', 'Name must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('SKU', 'SKU must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('additionalCost', 'Additional Cost must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('stockCount', 'Stock Count must not be empty.').trim().isLength({ min: 1 }).escape(),
    asyncHandler(async function(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.json(errors.array());
            return;
        }
        else {
            const variant = new Variant({
                name: req.body.name,
                SKU: req.body.SKU,
                additionalCost: req.body.additionalCost,
                stockCount: req.body.stockCount
            });
            await variant.findByIdAndUpdate(req.params.id, variant, {});
            res.redirect(variant.url);
        }
    }),
];
