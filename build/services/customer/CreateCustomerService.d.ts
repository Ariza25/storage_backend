interface CreateCustomerProps {
    name: string;
    email: string;
    address?: string;
    contact: string;
}
declare class CreateCustomerService {
    execute({ name, email, address, contact }: CreateCustomerProps): Promise<{
        id: string;
        name: string;
        email: string;
        address: string | null;
        contact: string;
        status: boolean;
        createdAt: Date | null;
        updatedAt: Date | null;
    }>;
}
export { CreateCustomerService };
