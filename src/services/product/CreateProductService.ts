import prismaClient from "../../prisma";

interface CreateProductProps{
    id: string;
    name: string;
    price: string;
    quantity: string;
    category_id: string;
}

class CreateProductService{
    async execute({id, name, price, quantity, category_id}: CreateProductProps ){

        if(!name || !price || !quantity || !category_id){
            throw new Error("preencha todos os campos");
        }
        
        const product = await prismaClient.product.create({
            data:{
                id,
                name,
                price,
                quantity,
                category_id
            }
        })
        return product;
    }
}

export {CreateProductService}