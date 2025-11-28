import { User } from "../entities/User";

export interface IUserRepository {
  list(): Promise<User[]>;
  getById(id: number): Promise<User | null>;
  create(input: { name: string; email: string; password: string; avatar?: string }): Promise<User>;
  update(id: number, input: Partial<{ name: string; email: string }>): Promise<User>;
  checkEmail(email: string): Promise<boolean>;
}