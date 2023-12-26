"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCategoryController = void 0;
const DeleteCategoryService_1 = require("../../services/category/DeleteCategoryService");
class DeleteCategoryController {
    async handle(request, reply) {
        const { id } = request.query;
        const categoryService = new DeleteCategoryService_1.DeleteCategoryService();
        const category = await categoryService.execute({ id });
        reply.send(category);
        return { message: "categoria deletada com sucesso" };
    }
}
exports.DeleteCategoryController = DeleteCategoryController;
//# sourceMappingURL=DeleteCategoryController.js.map