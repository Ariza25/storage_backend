import { FastifyRequest, FastifyReply } from "fastify";
declare class ListProductsController {
    handle(request: FastifyRequest, reply: FastifyReply): Promise<{
        product: {
            id: string;
            name: string;
            price: string;
            quantity: string;
            category_id: string;
            createdAt: Date | null;
            updatedAt: Date | null;
        }[];
    }>;
}
export { ListProductsController };
