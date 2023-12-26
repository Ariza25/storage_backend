interface CreateCategoryProps {
    id: string;
    name: string;
}
declare class CreateCategoryService {
    execute({ id, name }: CreateCategoryProps): Promise<{
        id: string;
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
}
export { CreateCategoryService };
