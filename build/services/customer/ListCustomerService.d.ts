declare class ListCustomerService {
    execute(): Promise<{
        id: string;
        name: string;
        email: string;
        address: string | null;
        contact: string;
        status: boolean;
        createdAt: Date | null;
        updatedAt: Date | null;
    }[]>;
}
export { ListCustomerService };
