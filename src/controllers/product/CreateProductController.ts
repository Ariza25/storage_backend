import { FastifyRequest, FastifyReply } from "fastify";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id, name, price, quantity, category_id} = request.body as { id: string, name: string, price: string, quantity: string, category_id: string};

        const productService = new CreateProductService();

        const product = await productService.execute({ id, name, price, quantity, category_id});

        reply.send(product)
    }
}

export { CreateProductController }