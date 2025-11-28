import { Router } from "express";
import { UserController } from "../controllers/UserController";

export function makeUsersRouter(controller: UserController) {
  const r = Router();
  r.get("/", controller.list.bind(controller));
  r.get("/:id", controller.get.bind(controller));
  r.post("/", controller.create.bind(controller));
  r.put("/:id", controller.update.bind(controller));
  r.post("/is-available", controller.checkEmail.bind(controller));
  return r;
}
