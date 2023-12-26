import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {id, name, email, password} = request.body as {id: string, name: string, email: string, password: string};

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({id, name, email, password});

        return reply.send(user);
    }
}

export {CreateUserController}