"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const isAuthenticated_1 = require("./middleware/isAuthenticated");
const CreateCustomerController_1 = require("./controllers/customer/CreateCustomerController");
const ListCustomerController_1 = require("./controllers/customer/ListCustomerController");
const DeleteCustomerController_1 = require("./controllers/customer/DeleteCustomerController");
const CreateProductController_1 = require("./controllers/product/CreateProductController");
const ListProductsController_1 = require("./controllers/product/ListProductsController");
const DeleteProductController_1 = require("./controllers/product/DeleteProductController");
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const ListCategoryController_1 = require("./controllers/category/ListCategoryController");
const DeleteCategoryController_1 = require("./controllers/category/DeleteCategoryController");
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
async function routes(app, options) {
    app.post("/customer", { preHandler: isAuthenticated_1.isAuthenticated }, async (request, reply) => {
        return new CreateCustomerController_1.CreateCustomerController().handle(request, reply);
    });
    app.get("/customers", { preHandler: isAuthenticated_1.isAuthenticated }, async (request, reply) => {
        return new ListCustomerController_1.ListCustomerController().handle(request, reply);
    });
    app.delete("/customer", { preHandler: isAuthenticated_1.isAuthenticated }, async (request, reply) => {
        return new DeleteCustomerController_1.DeleteCustomerController().handle(request, reply);
    });
    app.post("/product", { preHandler: isAuthenticated_1.isAuthenticated }, async (request, reply) => {
        return new CreateProductController_1.CreateProductController().handle(request, reply);
    });
    app.get("/products", { preHandler: isAuthenticated_1.isAuthenticated }, async (request, reply) => {
        return new ListProductsController_1.ListProductsController().handle(request, reply);
    });
    app.delete("/product", { preHandler: isAuthenticated_1.isAuthenticated }, async (request, reply) => {
        return new DeleteProductController_1.DeleteProductController().handle(request, reply);
    });
    app.post("/category", { preHandler: isAuthenticated_1.isAuthenticated }, async (request, reply) => {
        return new CreateCategoryController_1.CreateCategoryController().handle(request, reply);
    });
    app.get("/categories", { preHandler: isAuthenticated_1.isAuthenticated }, async (request, reply) => {
        return new ListCategoryController_1.ListCategoryController().handle(request, reply);
    });
    app.delete("/category", { preHandler: isAuthenticated_1.isAuthenticated }, async (request, reply) => {
        return new DeleteCategoryController_1.DeleteCategoryController().handle(request, reply);
    });
    app.post("/user/register", async (request, reply) => {
        return new CreateUserController_1.CreateUserController().handle(request, reply);
    });
    app.post("/user/login", async (request, reply) => {
        return new AuthUserController_1.AuthUserController().handle(request, reply);
    });
}
exports.routes = routes;
//# sourceMappingURL=routes.js.map