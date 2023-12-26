interface DeleteCustomerProps {
    id: string;
}
declare class DeleteCustomerService {
    execute({ id }: DeleteCustomerProps): Promise<{
        message: string;
    }>;
}
export { DeleteCustomerService };
