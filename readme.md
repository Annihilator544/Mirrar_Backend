# Project Title

## Introduction

Welcome to the E-Commerce REST API project. This API is designed to provide a comprehensive interface for managing an e-commerce system. It is built using Node.js and follows the principles of Test Driven Development (TDD).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

```
git clone https://github.com/Annihilator544/Mirrar_Backend.git
```

### Prerequisites

What things you need to install the software and how to install them.

- Node.js
- npm

### Installing

A step by step series of examples that tell you how to get a development environment running.

1. Clone the repository
2. Run `npm install` to install all dependencies
3. Run `npm start` to start the server

## Running the tests

Run `npm test` to run the automated tests for this system.

## API Endpoints

API endpoints Description:

- `GET /` : This endpoint is used to get the index page of the product.
- `GET /product/create` : This endpoint is used to get the product creation page.
- `POST /product/create` : This endpoint is used to create a new product.
- `GET /product/:id/delete` : This endpoint is used to get the product deletion page for a specific product.
- `POST /product/:id/delete` : This endpoint is used to delete a specific product.
- `GET /product/:id/update` : This endpoint is used to get the product update page for a specific product.
- `POST /product/:id/update` : This endpoint is used to update a specific product.
- `GET /product/:id` : This endpoint is used to get the details of a specific product.
- `GET /variant/create` : This endpoint is used to get the variant creation page.
- `POST /variant/create` : This endpoint is used to create a new variant.
- `GET /variant/:id/delete` : This endpoint is used to get the variant deletion page for a specific variant.
- `POST /variant/:id/delete` : This endpoint is used to delete a specific variant.
- `GET /variant/:id/update` : This endpoint is used to get the variant update page for a specific variant.
- `POST /variant/:id/update` : This endpoint is used to update a specific variant.
- `GET /variant/:id` : This endpoint is used to get the details of a specific variant.
- `POST /search` : This endpoint is used to search for a product.

## Architectural Decisions

- made using model view controll design.
- user Jest SuperTest to test Api endpoints.
- Postman was used to check for api payloads and responses.
- file populatedb.js is used to populate the db with some data.
- MongoDb was used for data storage and collection.
- Mongo memory server  was used to check for model errors.
- array of variants was used in products array instead of product id in every variant to reduce access times, and make the api faster.
- express validator used to validate response data and send error codes.
- async event handler used to fetch data asynchronously.
- test.js used to test the api endpoints using Jest/ SuperTest


## Other Instructions

change mongodb url to your mongodb url

## Built With

This project uses these dependencies:

- [Node.js](https://nodejs.org/en/) - JavaScript runtime
- [async-handler](https://www.npmjs.com/package/express-async-handler) - Middleware for handling exceptions inside of async express routes
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) - Middleware which parses cookies attached to the client request object
- [debug](https://www.npmjs.com/package/debug) - A tiny JavaScript debugging utility modelled after Node.js core's debugging technique
- [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [express-async-handler](https://www.npmjs.com/package/express-async-handler) - Middleware for handling exceptions inside of async express routes
- [express-validator](https://express-validator.github.io/docs/) - An express.js middleware for validator.js.
- [http-errors](https://www.npmjs.com/package/http-errors) - Create HTTP error objects
- [mongodb](https://www.mongodb.com/) - The MongoDB Database
- [mongoose](https://mongoosejs.com/) - Elegant mongodb object modeling for node.js
- [morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for node.js
- [pug](https://pugjs.org/api/getting-started.html) - High-performance template engine

This project uses these devDependencies:

- [jest](https://jestjs.io/) - Delightful JavaScript Testing

## Authors

* **Aditya Sharma** - *sigh* - [Annihilator544](https://github.com/Annihilator544)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
