import prismaClient from "../../prisma";

interface DeleteCategoryServiceProps {
  id: string;
}

class DeleteCategoryService {
  async execute({ id }: DeleteCategoryServiceProps) {
    if (!id) {
      throw new Error("Invalid id");
    }

    const findCategory = await prismaClient.category.findFirst({
      where: {
        id: id
      }
    })

    if (!findCategory) {
      throw new Error("Category not found");
    }

    await prismaClient.category.delete({ where: { id: findCategory.id } })

    return { message: "Deletado com sucesso" }
  }
}

export { DeleteCategoryService };