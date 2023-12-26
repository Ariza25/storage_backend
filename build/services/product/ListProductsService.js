"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProductsService = void 0;
const tslib_1 = require("tslib");
const prisma_1 = tslib_1.__importDefault(require("../../prisma"));
class ListProductsService {
    async execute() {
        const products = await prisma_1.default.product.findMany();
        return products;
    }
}
exports.ListProductsService = ListProductsService;
//# sourceMappingURL=ListProductsService.js.map