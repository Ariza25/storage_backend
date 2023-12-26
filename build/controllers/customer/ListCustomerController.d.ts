import { FastifyRequest, FastifyReply } from "fastify";
declare class ListCustomerController {
    handle(request: FastifyRequest, reply: FastifyReply): Promise<{
        customer: {
            id: string;
            name: string;
            email: string;
            address: string | null;
            contact: string;
            status: boolean;
            createdAt: Date | null;
            updatedAt: Date | null;
        }[];
    }>;
}
export { ListCustomerController };
