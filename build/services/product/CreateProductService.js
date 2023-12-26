"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductService = void 0;
const tslib_1 = require("tslib");
const prisma_1 = tslib_1.__importDefault(require("../../prisma"));
class CreateProductService {
    async execute({ id, name, price, quantity, category_id }) {
        if (!name || !price || !quantity || !category_id) {
            throw new Error("preencha todos os campos");
        }
        const product = await prisma_1.default.product.create({
            data: {
                id,
                name,
                price,
                quantity,
                category_id
            }
        });
        return product;
    }
}
exports.CreateProductService = CreateProductService;
//# sourceMappingURL=CreateProductService.js.map