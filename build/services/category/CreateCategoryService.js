"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryService = void 0;
const tslib_1 = require("tslib");
const prisma_1 = tslib_1.__importDefault(require("../../prisma"));
class CreateCategoryService {
    async execute({ id, name }) {
        if (!name) {
            throw new Error("preencha o campo necessário");
        }
        const category = await prisma_1.default.category.create({
            data: {
                id,
                name,
            }
        });
        return category;
    }
}
exports.CreateCategoryService = CreateCategoryService;
//# sourceMappingURL=CreateCategoryService.js.map