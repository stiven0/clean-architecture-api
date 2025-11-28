import { IUserRepository } from "../repositories/IUserRepository";

export class ListUsersUseCase {
  constructor(private repo: IUserRepository) {}
  async execute() {
    return this.repo.list();
  }
}
