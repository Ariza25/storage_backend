"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductController = void 0;
const CreateProductService_1 = require("../../services/product/CreateProductService");
class CreateProductController {
    async handle(request, reply) {
        const { id, name, price, quantity, category_id } = request.body;
        const productService = new CreateProductService_1.CreateProductService();
        const product = await productService.execute({ id, name, price, quantity, category_id });
        reply.send(product);
    }
}
exports.CreateProductController = CreateProductController;
//# sourceMappingURL=CreateProductController.js.map