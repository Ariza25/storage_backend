"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProductsController = void 0;
const ListProductsService_1 = require("../../services/product/ListProductsService");
class ListProductsController {
    async handle(request, reply) {
        const listCustomerService = new ListProductsService_1.ListProductsService();
        const product = await listCustomerService.execute();
        return { product };
    }
}
exports.ListProductsController = ListProductsController;
//# sourceMappingURL=ListProductsController.js.map