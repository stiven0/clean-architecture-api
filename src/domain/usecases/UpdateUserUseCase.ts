import { IUserRepository } from "../repositories/IUserRepository";
import { AppError } from "../errors/AppError";

export class UpdateUserUseCase {
  constructor(private repo: IUserRepository) {}
  async execute(id: number, input: Partial<{ name: string; email: string }>) {
    const existing = await this.repo.getById(id);
    if (!existing) throw new AppError(404, "User not found");
    return this.repo.update(id, input);
  }
}
