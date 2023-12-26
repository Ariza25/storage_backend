"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const CreateUserService_1 = require("../../services/user/CreateUserService");
class CreateUserController {
    async handle(request, reply) {
        const { id, name, email, password } = request.body;
        const createUserService = new CreateUserService_1.CreateUserService();
        const user = await createUserService.execute({ id, name, email, password });
        return reply.send(user);
    }
}
exports.CreateUserController = CreateUserController;
//# sourceMappingURL=CreateUserController.js.map