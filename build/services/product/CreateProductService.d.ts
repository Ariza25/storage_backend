interface CreateProductProps {
    id: string;
    name: string;
    price: string;
    quantity: string;
    category_id: string;
}
declare class CreateProductService {
    execute({ id, name, price, quantity, category_id }: CreateProductProps): Promise<{
        id: string;
        name: string;
        price: string;
        quantity: string;
        category_id: string;
        createdAt: Date | null;
        updatedAt: Date | null;
    }>;
}
export { CreateProductService };
