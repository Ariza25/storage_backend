import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {id, name} = request.body as {id: string, name: string};

        const createCategoryService = new CreateCategoryService();
        const category = await createCategoryService.execute({id, name});

        return reply.send(category);
    }
}

export {CreateCategoryController}