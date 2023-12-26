"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCategoryController = void 0;
const DeleteCategoryService_1 = require("../../services/category/DeleteCategoryService");
class DeleteCategoryController {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.query;
            const categoryService = new DeleteCategoryService_1.DeleteCategoryService();
            const category = yield categoryService.execute({ id });
            reply.send(category);
            return { message: "categoria deletada com sucesso" };
        });
    }
}
exports.DeleteCategoryController = DeleteCategoryController;
