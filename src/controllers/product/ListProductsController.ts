import { FastifyRequest, FastifyReply } from "fastify";
import { ListProductsService } from "../../services/product/ListProductsService";

class ListProductsController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listCustomerService = new ListProductsService();
        const product = await listCustomerService.execute();

        return {product};
    }
}

export {ListProductsController}