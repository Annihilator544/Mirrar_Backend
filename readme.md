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

Describe the architectural decisions made in the project. Why you chose certain technologies, patterns, etc.

## Assumptions

List any assumptions that were made while developing the project.

## Other Instructions

Any other necessary instructions go here.

## Built With

* [Express](https://expressjs.com/) - The web framework used
* [Morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for node.js
* [Pug](https://pugjs.org/api/getting-started.html) - Template engine for Node.js

## Authors

* **Your Name** - *Initial work* - [YourGithubUsername](https://github.com/YourGithubUsername)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc