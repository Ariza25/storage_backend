import { FastifyRequest, FastifyReply } from "fastify";
declare class CreateProductController {
    handle(request: FastifyRequest, reply: FastifyReply): Promise<void>;
}
export { CreateProductController };
