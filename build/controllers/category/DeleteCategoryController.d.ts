import { FastifyRequest, FastifyReply } from "fastify";
declare class DeleteCategoryController {
    handle(request: FastifyRequest, reply: FastifyReply): Promise<{
        message: string;
    }>;
}
export { DeleteCategoryController };
