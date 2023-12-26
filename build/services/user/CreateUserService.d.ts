interface UserProps {
    id: string;
    name: string;
    email: string;
    password: string;
}
declare class CreateUserService {
    execute({ id, name, email, password }: UserProps): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
}
export { CreateUserService };
