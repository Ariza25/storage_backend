import {FastifyRequest, FastifyReply} from "fastify";
import { DeleteCategoryService } from "../../services/category/DeleteCategoryService";

class DeleteCategoryController{
    async handle(request: FastifyRequest, reply: FastifyReply){

        const {id} = request.query as {id: string};
        
        const categoryService = new DeleteCategoryService();
        const category = await categoryService.execute({id});

        reply.send(category);
        return {message: "categoria deletada com sucesso"};
    }
}

export {DeleteCategoryController}