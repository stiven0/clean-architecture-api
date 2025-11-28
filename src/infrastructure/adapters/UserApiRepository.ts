import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { User } from "../../domain/entities/User";
import { httpClient } from "../http/HttpClient";
import { AppError } from "../../domain/errors/AppError";

function mapToDomain(dto: any): User {
  return new User({
    id: dto.id,
    name: dto.name,
    email: dto.email,
    avatar: dto.avatar,
    role: dto.role
  });
}

export class UserApiRepository implements IUserRepository {
  private client = httpClient();

  async list(): Promise<User[]> {
    try {
      const res = await this.client.get("/users");
      return res.data.map((d: any) => mapToDomain(d));
    } catch (err: any) {
      throw new AppError(500, "Error fetching users from external API");
    }
  }

  async getById(id: number): Promise<User | null> {
    try {
      const res = await this.client.get(`/users/${id}`);
      return mapToDomain(res.data);
    } catch (err: any) {
      if (err.response?.status === 400 || err.response?.status === 404) return null;
      throw new AppError(500, "Error fetching user from external API");
    }
  }

  async create(input: { name: string; email: string; password: string; avatar?: string }): Promise<User> {
    try {
      const res = await this.client.post("/users", input);
      return mapToDomain(res.data);
    } catch (err: any) {
      throw new AppError(500, "Error fetching user from external API");
    }
  }

  async update(id: number, input: Partial<{ name: string; email: string }>): Promise<User> {
    try {
      const res = await this.client.put(`/users/${id}`, input);
      return mapToDomain(res.data);
    } catch (err: any) {
      throw new AppError(500, "Error fetching user from external API");
    }
  }

  async checkEmail(email: string): Promise<boolean> {
    try {
      const res = await this.client.post('/users/is-available', { email });
      return res.data.isAvailable;
    } catch (err: any) {
      throw new AppError(500, "Error fetching user from external API");
    }
  }
}