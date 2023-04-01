import { Router } from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../../services/user.services";

export default (app: Router): void => {
  const router = Router();
  app.use("/user", router);

  router.get("/:id", getUser);
  router.get("/", getUsers);
  router.post("/", createUser);
  router.put("/:id", updateUser);
  router.delete("/:id", deleteUser);
};
