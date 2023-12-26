import prismaClient from "../../prisma";

interface CreateCategoryProps{
    id: string;
    name: string;
}

class CreateCategoryService{
    async execute({id, name}: CreateCategoryProps ){

        if(!name){
            throw new Error("preencha o campo necessário");
        }
        const category = await prismaClient.category.create({
            data:{
                id,
                name,
            }
        })
        return category;
    }
}

export {CreateCategoryService}