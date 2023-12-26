import { FastifyRequest, FastifyReply } from 'fastify';
export declare function isAuthenticated(req: FastifyRequest, res: FastifyReply): Promise<string | undefined>;
