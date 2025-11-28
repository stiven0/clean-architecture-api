import { UserApiRepository } from "../infrastructure/adapters/UserApiRepository";
import { ListUsersUseCase } from "../domain/usecases/ListUsersUseCase";
import { GetUserUseCase } from "../domain/usecases/GetUserUseCase";
import { CreateUserUseCase } from "../domain/usecases/CreateUserUseCase";
import { UpdateUserUseCase } from "../domain/usecases/UpdateUserUseCase";
import { UserController } from "../presentation/controllers/UserController";
import { CheckEmailUserUseCase } from "../domain/usecases/CheckEmailUserUseCase";

export function buildContainer() {
  const repo = new UserApiRepository();
  const listUC = new ListUsersUseCase(repo);
  const getUC = new GetUserUseCase(repo);
  const createUC = new CreateUserUseCase(repo);
  const updateUC = new UpdateUserUseCase(repo);
  const checkEmailUC = new CheckEmailUserUseCase(repo);
  const userController = new UserController(listUC, getUC, createUC, updateUC, checkEmailUC);
  return { userController };
}
