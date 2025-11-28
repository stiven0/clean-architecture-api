import { IUserRepository } from "../repositories/IUserRepository";
import { AppError } from "../errors/AppError";

export class CheckEmailUserUseCase {
  constructor(private repo: IUserRepository) {}
  async execute(email: string) {
    const emailExist = await this.repo.checkEmail(email);
    return emailExist;
  }
}