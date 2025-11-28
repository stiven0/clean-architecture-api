import { AppError } from '../errors/AppError';
import { IUserRepository } from '../repositories/IUserRepository';

export class CreateUserUseCase {
    constructor(private repo: IUserRepository) {}

    async execute(input: { name: string; email: string; password: string; avatar?: string }) {
        if (input.password.length < 4) throw new AppError(400, "Password too short");
        return this.repo.create(input);
    }
}