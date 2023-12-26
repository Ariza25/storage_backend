import { FastifyRequest, FastifyReply } from "fastify";
declare class ListCategoryController {
    handle(request: FastifyRequest, reply: FastifyReply): Promise<{
        category: {
            id: string;
            name: string;
            created_at: Date | null;
            updated_at: Date | null;
        }[];
    }>;
}
export { ListCategoryController };
