"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerController = void 0;
const CreateCustomerService_1 = require("../../services/customer/CreateCustomerService");
class CreateCustomerController {
    async handle(request, reply) {
        const { name, email, address, contact } = request.body;
        const customerService = new CreateCustomerService_1.CreateCustomerService();
        const customer = await customerService.execute({ name, email, address, contact });
        return reply.send(customer);
    }
}
exports.CreateCustomerController = CreateCustomerController;
//# sourceMappingURL=CreateCustomerController.js.map