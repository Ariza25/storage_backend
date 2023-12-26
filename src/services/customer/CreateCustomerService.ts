import prismaClient from "../../prisma";

interface CreateCustomerProps{
    name: string;
    email: string;
    address?: string;
    contact: string;
}

class CreateCustomerService{
    async execute({name, email, address, contact}: CreateCustomerProps ){

        if(!name || !email || !address || !contact){
            throw new Error("preencha todos os campos");
        }
        const customer = await prismaClient.customer.create({
            data:{
                name,
                email,
                address,
                contact,
                status: true
            }
        })
        return customer;
    }
}

export {CreateCustomerService}