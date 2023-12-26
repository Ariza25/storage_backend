"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategoryService = void 0;
const tslib_1 = require("tslib");
const prisma_1 = tslib_1.__importDefault(require("../../prisma"));
class ListCategoryService {
    async execute() {
        const categories = await prisma_1.default.category.findMany();
        return categories;
    }
}
exports.ListCategoryService = ListCategoryService;
//# sourceMappingURL=ListCategoryService.js.map