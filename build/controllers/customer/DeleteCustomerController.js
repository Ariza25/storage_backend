"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCustomerController = void 0;
const DeleteCustomerService_1 = require("../../services/customer/DeleteCustomerService");
class DeleteCustomerController {
    async handle(request, reply) {
        const { id } = request.query;
        const customerService = new DeleteCustomerService_1.DeleteCustomerService();
        const customer = await customerService.execute({ id });
        reply.send(customer);
        return { message: "cliente deletado com sucesso" };
    }
}
exports.DeleteCustomerController = DeleteCustomerController;
//# sourceMappingURL=DeleteCustomerController.js.map