interface DeleteCategoryServiceProps {
    id: string;
}
declare class DeleteCategoryService {
    execute({ id }: DeleteCategoryServiceProps): Promise<{
        message: string;
    }>;
}
export { DeleteCategoryService };
