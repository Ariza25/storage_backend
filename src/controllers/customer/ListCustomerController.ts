import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomerService } from "../../services/customer/ListCustomerService";

class ListCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listCustomerService = new ListCustomerService();
        const customer = await listCustomerService.execute();

        return {customer};
    }
}

export {ListCustomerController}