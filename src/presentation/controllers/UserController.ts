import { Request, Response, NextFunction } from "express";
import { ListUsersUseCase } from "../../domain/usecases/ListUsersUseCase";
import { GetUserUseCase } from "../../domain/usecases/GetUserUseCase";
import { CreateUserUseCase } from "../../domain/usecases/CreateUserUseCase";
import { UpdateUserUseCase } from "../../domain/usecases/UpdateUserUseCase";
import { CheckEmailUserUseCase } from "../../domain/usecases/CheckEmailUserUseCase";

export class UserController {
  constructor(
    private listUC: ListUsersUseCase,
    private getUC: GetUserUseCase,
    private createUC: CreateUserUseCase,
    private updateUC: UpdateUserUseCase,
    private checkEmailUC: CheckEmailUserUseCase
  ) {}

  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.listUC.execute();
      res.json(users.map(u => u.toJSON()));
    } catch (err) { next(err); }
  }

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const user = await this.getUC.execute(id);
      res.json(user.toJSON());
    } catch (err) { next(err); }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = req.body;
      const user = await this.createUC.execute(payload);
      res.status(201).json(user.toJSON());
    } catch (err) { next(err); }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const user = await this.updateUC.execute(id, req.body);
      res.json(user.toJSON());
    } catch (err) { next(err); }
  }

  async checkEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.body.email;
      const emailExist = await this.checkEmailUC.execute(email);
      res.json(emailExist);
    } catch (err) { next(err); }
  }
}
