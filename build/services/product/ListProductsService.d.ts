declare class ListProductsService {
    execute(): Promise<{
        id: string;
        name: string;
        price: string;
        quantity: string;
        category_id: string;
        createdAt: Date | null;
        updatedAt: Date | null;
    }[]>;
}
export { ListProductsService };
