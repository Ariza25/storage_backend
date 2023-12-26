import { FastifyRequest, FastifyReply } from 'fastify';
import { verify } from 'jsonwebtoken';

interface Payload {
    sub: string;
}

export async function isAuthenticated(
    req: FastifyRequest,
    res: FastifyReply,
) {

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

        const { sub } = verify(token, secret) as Payload;
        return (sub)


    } catch (err) {
        res.code(401).send({ error: "Token invalid" });
    }
}