"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserService = void 0;
const tslib_1 = require("tslib");
const prisma_1 = tslib_1.__importDefault(require("../../prisma"));
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthUserService {
    async execute({ email, password }) {
        const user = await prisma_1.default.user.findFirst({ where: { email: email } });
        if (!user) {
            throw new Error("User not found");
        }
        if (!user.password) {
            throw new Error("Password not found");
        }
        const passwordMatch = await (0, bcrypt_1.compare)(password, user.password);
        if (!passwordMatch) {
            throw new Error("Incorrect password");
        }
        //gerar token JWT
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error("JWT_SECRET is not defined");
        }
        const token = (0, jsonwebtoken_1.sign)({
            name: user.name,
            email: user.email
        }, secret, {
            subject: user.id,
            expiresIn: '30d'
        });
        return { id: user.id, name: user.name, email: user.email, token: token };
    }
}
exports.AuthUserService = AuthUserService;
//# sourceMappingURL=AuthUserService.js.map