interface DeleteProductProps {
    id: string;
}
declare class DeleteProductService {
    execute({ id }: DeleteProductProps): Promise<{
        message: string;
    }>;
}
export { DeleteProductService };
