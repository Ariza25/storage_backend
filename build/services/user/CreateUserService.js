"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const tslib_1 = require("tslib");
const prisma_1 = tslib_1.__importDefault(require("../../prisma"));
const bcrypt_1 = require("bcrypt");
class CreateUserService {
    async execute({ id, name, email, password }) {
        const userAlreadyExists = await prisma_1.default.user.findFirst({
            where: {
                email
            }
        });
        if (userAlreadyExists) {
            throw new Error("User already exists!");
        }
        if (!name || !email || !password) {
            throw new Error("preencha todos os campos");
        }
        const hashedPassword = await (0, bcrypt_1.hash)(password, 10);
        const user = await prisma_1.default.user.create({
            data: {
                id,
                name,
                email,
                password: hashedPassword
            }
        });
        return user;
    }
}
exports.CreateUserService = CreateUserService;
//# sourceMappingURL=CreateUserService.js.map