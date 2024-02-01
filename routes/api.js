const express = require ("express");
const router = express.Router();

const productController = require("../controllers/productController");
const variantController = require("../controllers/variantController");
const searchController = require("../controllers/searchController");

router.get("/", productController.index);

router.get("/product/create", productController.create_get);

router.post("/product/create", productController.create_post);

router.get("/product/:id/delete", productController.delete_get);

router.post("/product/:id/delete", productController.delete_post);

router.get("/product/:id/update", productController.update_get);

router.post("/product/:id/update", productController.update_post);

router.get("/product/:id", productController.product_detail);

router.get("/variant/create", variantController.create_get);

router.post("/variant/create", variantController.create_post);

router.get("/variant/:id/delete", variantController.delete_get);

router.post("/variant/:id/delete", variantController.delete_post);

router.get("/variant/:id/update", variantController.update_get);

router.post("/variant/:id/update", variantController.update_post);

router.get("/variant/:id", variantController.Variant_detail);

router.post("/search", searchController.searchProduct);

module.exports = router;