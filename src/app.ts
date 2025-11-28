import express from "express";
import cors from "cors";
import morgan from 'morgan';
import { buildContainer } from "./shared/container";
import { makeUsersRouter } from "./presentation/routes/users.routes";
import { errorHandler } from "./presentation/middlewares/errorHandler";


export function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan('dev'));

  const { userController } = buildContainer();
  app.use("/api/v1/users", makeUsersRouter(userController));
  app.use(errorHandler);
  return app;
}
