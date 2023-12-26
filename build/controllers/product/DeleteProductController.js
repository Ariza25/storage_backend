"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductController = void 0;
const DeleteProductService_1 = require("../../services/product/DeleteProductService");
class DeleteProductController {
    async handle(request, reply) {
        const { id } = request.query;
        const deleteProductService = new DeleteProductService_1.DeleteProductService();
        const product = await deleteProductService.execute({ id });
        return reply.send(product);
    }
}
exports.DeleteProductController = DeleteProductController;
//# sourceMappingURL=DeleteProductController.js.map