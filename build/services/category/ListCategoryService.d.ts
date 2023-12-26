declare class ListCategoryService {
    execute(): Promise<{
        id: string;
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
    }[]>;
}
export { ListCategoryService };
