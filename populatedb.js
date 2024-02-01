console.log(
    'This script populates some variants and products to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
  );

// Get arguments passed on command line

const Product = require('./models/product');
const Variant = require('./models/variant');

const VariantArray = [];

const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

const mongoDB = process.argv.slice(2)[0];
  
main().catch((err) => console.log(err));

async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createProducts();
    await createVariants();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
}

async function createVariants() {
    console.log("Debug: Creating Variants");
    await VariantCreate('Variant 1', 'SKU1', 10, 100);
    await VariantCreate('Variant 2', 'SKU2', 20, 200);
    await VariantCreate('Variant 3', 'SKU3', 30, 300);
    await VariantCreate('Variant 4', 'SKU4', 40, 400);
    await VariantCreate('Variant 5', 'SKU5', 50, 500);
    console.log("Debug: Variants created");
}

async function VariantCreate(name, SKU, additionalCost, stockCount) {
    const variant = new Variant({ name, SKU, additionalCost, stockCount });
    VariantArray.push(variant);
    await variant.save();
    console.log('New Variant: ' + variant);
}

async function createProducts() {
    console.log("Debug: Creating Products");
    await ProductCreate('Product 1', 'Description 1', 100, [VariantArray[0], VariantArray[1]]);
    await ProductCreate('Product 2', 'Description 2', 200, [VariantArray[2], VariantArray[3]]);
    await ProductCreate('Product 3', 'Description 3', 300, [VariantArray[4]]);
    console.log("Debug: Products created");
}

async function ProductCreate(name, description, price, variant) {
    const product = new Product({ name, description, price, variant });
    await product.save();
    console.log('New Product: ' + product);
}