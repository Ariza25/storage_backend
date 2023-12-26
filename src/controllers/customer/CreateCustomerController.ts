import {FastifyRequest, FastifyReply} from "fastify";
import {CreateCustomerService} from "../../services/customer/CreateCustomerService";

class CreateCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {name, email, address, contact} = request.body as {name: string, email: string, address: string, contact: string};

        const customerService = new CreateCustomerService();

        const customer = await customerService.execute({name, email, address, contact});

        return reply.send(customer)
    }
}

export {CreateCustomerController}