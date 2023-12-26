"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCustomerController = void 0;
const ListCustomerService_1 = require("../../services/customer/ListCustomerService");
class ListCustomerController {
    async handle(request, reply) {
        const listCustomerService = new ListCustomerService_1.ListCustomerService();
        const customer = await listCustomerService.execute();
        return { customer };
    }
}
exports.ListCustomerController = ListCustomerController;
//# sourceMappingURL=ListCustomerController.js.map