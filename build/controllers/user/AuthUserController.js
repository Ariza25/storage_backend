"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserController = void 0;
const AuthUserService_1 = require("../../services/user/AuthUserService");
class AuthUserController {
    async handle(request, reply) {
        const { email, password } = request.body;
        const authUserService = new AuthUserService_1.AuthUserService();
        const authUser = await authUserService.execute({ email, password });
        return reply.send(authUser);
    }
}
exports.AuthUserController = AuthUserController;
//# sourceMappingURL=AuthUserController.js.map