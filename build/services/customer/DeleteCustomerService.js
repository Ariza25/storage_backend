"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCustomerService = void 0;
const tslib_1 = require("tslib");
const prisma_1 = tslib_1.__importDefault(require("../../prisma"));
class DeleteCustomerService {
    async execute({ id }) {
        if (!id) {
            throw new Error("Invalid id");
        }
        const findCustomer = await prisma_1.default.customer.findFirst({
            where: {
                id: id
            }
        });
        if (!findCustomer) {
            throw new Error("Customer not found");
        }
        await prisma_1.default.customer.delete({ where: { id: findCustomer.id } });
        return { message: "Deletado com sucesso" };
    }
}
exports.DeleteCustomerService = DeleteCustomerService;
//# sourceMappingURL=DeleteCustomerService.js.map