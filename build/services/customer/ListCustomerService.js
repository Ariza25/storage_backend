"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCustomerService = void 0;
const tslib_1 = require("tslib");
const prisma_1 = tslib_1.__importDefault(require("../../prisma"));
class ListCustomerService {
    async execute() {
        const customers = await prisma_1.default.customer.findMany();
        return customers;
    }
}
exports.ListCustomerService = ListCustomerService;
//# sourceMappingURL=ListCustomerService.js.map