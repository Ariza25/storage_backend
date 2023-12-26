import { FastifyRequest, FastifyReply } from "fastify";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listCategoryService = new ListCategoryService();
        const category = await listCategoryService.execute();

        return {category};
    }
}

export {ListCategoryController}