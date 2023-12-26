import { FastifyRequest, FastifyReply } from "fastify";
declare class DeleteCustomerController {
    handle(request: FastifyRequest, reply: FastifyReply): Promise<{
        message: string;
    }>;
}
export { DeleteCustomerController };
