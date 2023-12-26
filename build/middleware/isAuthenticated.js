"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
async function isAuthenticated(req, res) {
    const authToken = req.headers.authorization;
    if (!authToken) {
        res.code(401).send({ error: "Token missing" });
        return;
    }
    const parts = authToken.split(" ");
    if (parts.length !== 2) {
        res.code(401).send({ error: "Token error" });
        return;
    }
    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme)) {
        res.code(401).send({ error: "Token malformatted" });
        return;
    }
    try {
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error("JWT_SECRET is not defined");
        }
        const { sub } = (0, jsonwebtoken_1.verify)(token, secret);
        return (sub);
    }
    catch (err) {
        res.code(401).send({ error: "Token invalid" });
    }
}
exports.isAuthenticated = isAuthenticated;
//# sourceMappingURL=isAuthenticated.js.map