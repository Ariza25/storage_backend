import prismaClient from "../../prisma";
import { hash } from "bcrypt";

interface UserProps{
    id: string;
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({id, name, email, password}: UserProps){
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email
            }
        });

        if(userAlreadyExists){
            throw new Error("User already exists!");
        }

        if(!name || !email || !password){
            throw new Error("preencha todos os campos");
        }

        const hashedPassword = await hash(password, 10);

        const user = await prismaClient.user.create({
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

export {CreateUserService}