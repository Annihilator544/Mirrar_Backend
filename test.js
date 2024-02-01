const api = require("./routes/api");

const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", api);

describe("Test the root path", () => {
test("GET /variant/create", async () => {
  const response = await request(app).get("/variant/create");
  expect(response.statusCode).toBe(200);
});

test("POST /variant/create", async () => {
    const response = await request(app).post("/variant/create").send({
        name: "test",
        SKU: "test",
        additionalCost: "test",
        stockCount: "test",
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
        name: "test",
        SKU: "test",
        additionalCost: "test",
        stockCount: "test",
    });
    });

test("GET /variant/:id", async () => {
    const response = await request(app).get("/variant/:id");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
        name: "test",
        SKU: "test",
        additionalCost: "test",
        stockCount: "test",
    });
    });

test("GET /variant/:id/delete", async () => {
    const response = await request(app).get("/variant/:id/delete");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
        name: "test",
        SKU: "test",
        additionalCost: "test",
        stockCount: "test",
    });
    });

test("POST /variant/:id/delete", async () => {
    const response = await request(app).post("/variant/:id/delete");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
        name: "test",
        SKU: "test",
        additionalCost: "test",
        stockCount: "test",
    });
    });

test("GET /variant/:id/update", async () => {
    const response = await request(app).get("/variant/:id/update");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
        name: "test",
        SKU: "test",
        additionalCost: "test",
        stockCount: "test",
    });
    });

test("POST /variant/:id/update", async () => {
    const response = await request(app).post("/variant/:id/update").send({
        name: "test",
        SKU: "test",
        additionalCost: "test",
        stockCount: "test",
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
        name: "test",
        SKU: "test",
        additionalCost: "test",
        stockCount: "test",
    });
    });
    
test("GET /product/create", async () => {
    const response = await request(app).get("/product");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([]);
    });

test("POST /product/create", async () => {
    const response = await request(app).post("/product").send({
        name: "test",
        description: "test",
        price: "test",
        variant: "test",
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
        name: "test",
        description: "test",
        price: "test",
        variant: "test",
    });
    });

test("GET /product/:id", async () => {
    const response = await request(app).get("/product/:id");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
        name: "test",
        description: "test",
        price: "test",
        variant: "test",
    });
    });

test("GET /product/:id/delete", async () => {
    const response = await request(app).get("/product/:id/delete");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
        name: "test",
        description: "test",
        price: "test",
        variant: "test",
    });
    });

test("POST /product/:id/delete", async () => {
    const response = await request(app).post("/product/:id/delete");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
        name: "test",
        description: "test",
        price: "test",
        variant: "test",
    });
    });

test("GET /product/:id/update", async () => {
    const response = await request(app).get("/product/:id/update");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
        name: "test",
        description: "test",
        price: "test",
        variant: "test",
    });
    });

test("POST /product/:id/update", async () => {
    const response = await request(app).post("/product/:id/update").send({
        name: "test",
        description: "test",
        price: "test",
        variant: "test",
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
        name: "test",
        description: "test",
        price: "test",
        variant: "test",
    });
    });

test("POST /search", async () => {
    const response = await request(app).post("/search").send({
        search: "test",
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
        search: "test",
    });
    });

});
