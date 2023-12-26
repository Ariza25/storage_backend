"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerService = void 0;
const tslib_1 = require("tslib");
const prisma_1 = tslib_1.__importDefault(require("../../prisma"));
class CreateCustomerService {
    async execute({ name, email, address, contact }) {
        if (!name || !email || !address || !contact) {
            throw new Error("preencha todos os campos");
        }
        const customer = await prisma_1.default.customer.create({
            data: {
                name,
                email,
                address,
                contact,
                status: true
            }
        });
        return customer;
    }
}
exports.CreateCustomerService = CreateCustomerService;
//# sourceMappingURL=CreateCustomerService.js.map