"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCategoryService = void 0;
const tslib_1 = require("tslib");
const prisma_1 = tslib_1.__importDefault(require("../../prisma"));
class DeleteCategoryService {
    async execute({ id }) {
        if (!id) {
            throw new Error("Invalid id");
        }
        const findCategory = await prisma_1.default.category.findFirst({
            where: {
                id: id
            }
        });
        if (!findCategory) {
            throw new Error("Category not found");
        }
        await prisma_1.default.category.delete({ where: { id: findCategory.id } });
        return { message: "Deletado com sucesso" };
    }
}
exports.DeleteCategoryService = DeleteCategoryService;
//# sourceMappingURL=DeleteCategoryService.js.map