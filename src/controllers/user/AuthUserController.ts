import {FastifyRequest, FastifyReply} from 'fastify';
import { AuthUserService } from '../../services/user/AuthUserService';

class AuthUserController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { email, password } = request.body as {email: string, password: string};

        const authUserService = new AuthUserService();

        const authUser = await authUserService.execute({ email, password });

        return reply.send(authUser);
    }
}

export { AuthUserController };