import { IUserRepository } from "../repositories/IUserRepository";
import { AppError } from "../errors/AppError";

export class GetUserUseCase {
  constructor(private repo: IUserRepository) {}
  async execute(id: number) {
    const user = await this.repo.getById(id);
    if (!user) throw new AppError(404, "User not found");
    return user;
  }
}