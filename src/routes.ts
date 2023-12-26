import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";

import { isAuthenticated } from "./middleware/isAuthenticated";

import { CreateCustomerController } from "./controllers/customer/CreateCustomerController";
import { ListCustomerController } from "./controllers/customer/ListCustomerController";
import { DeleteCustomerController } from "./controllers/customer/DeleteCustomerController";

import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListProductsController } from "./controllers/product/ListProductsController";
import { DeleteProductController } from "./controllers/product/DeleteProductController";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { DeleteCategoryController } from "./controllers/category/DeleteCategoryController";

import { CreateUserController } from "./controllers/user/CreateUserController";
import {AuthUserController} from "./controllers/user/AuthUserController";


export async function routes(app: FastifyInstance, options: FastifyPluginOptions) {

    app.post("/customer", { preHandler: isAuthenticated }, async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply);
      });

    app.get("/customers", { preHandler: isAuthenticated }, async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomerController().handle(request, reply);
    });

    app.delete("/customer",  { preHandler: isAuthenticated }, async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply);
    });

    app.post("/product", { preHandler: isAuthenticated }, async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateProductController().handle(request, reply);
    });

    app.get("/products", { preHandler: isAuthenticated }, async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListProductsController().handle(request, reply);
    });

    app.delete("/product", { preHandler: isAuthenticated }, async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteProductController().handle(request, reply);
    });

    app.post("/category", {preHandler: isAuthenticated }, async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCategoryController().handle(request, reply);
    });

    app.get("/categories", { preHandler: isAuthenticated }, async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCategoryController().handle(request, reply);
    });

    app.delete("/category", { preHandler: isAuthenticated }, async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCategoryController().handle(request, reply);
    });

    app.post("/user/register", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().handle(request, reply);
    });

    app.post("/user/login", async (request: FastifyRequest, reply: FastifyReply) => {
        return new AuthUserController().handle(request, reply);
    });
}