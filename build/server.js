"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fastify_1 = tslib_1.__importDefault(require("fastify"));
const cors_1 = tslib_1.__importDefault(require("@fastify/cors"));
const routes_1 = require("./routes");
const app = (0, fastify_1.default)({ logger: true });
app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message });
});
const start = async () => {
    await app.register(cors_1.default);
    await app.register(routes_1.routes);
    try {
        await app.listen({ port: 3333 });
    }
    catch (err) {
        process.exit(1);
    }
};
start();
//# sourceMappingURL=server.js.map