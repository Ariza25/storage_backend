"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductService = void 0;
const tslib_1 = require("tslib");
const prisma_1 = tslib_1.__importDefault(require("../../prisma"));
class DeleteProductService {
    async execute({ id }) {
        if (!id) {
            throw new Error("Invalid id");
        }
        const findProduct = await prisma_1.default.product.findFirst({
            where: {
                id: id
            }
        });
        if (!findProduct) {
            throw new Error("Customer not found");
        }
        await prisma_1.default.product.delete({ where: { id: findProduct.id } });
        return { message: "Deletado com sucesso" };
    }
}
exports.DeleteProductService = DeleteProductService;
//# sourceMappingURL=DeleteProductService.js.map