import { Router, Request, Response } from "express";

import authMiddleware from "../middlewares/auth.middleware";

import User from "../../models/user.model";
import { createUserTemplate } from "../../utilities/user.utils";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../../services/user.services";

export default (app: Router): void => {
  const router = Router();
  app.use("/users", router);

  router.get("/", async (_req: Request, res: Response) => {
    const users: User[] = await getUsers();
    if (!users || users.length === 0) {
      return res.status(404).send("No users found");
    }

    return res.status(200).json(users);
  });

  router.post("/", authMiddleware, async (req: Request, res: Response) => {
    const userTemplate: User = await createUserTemplate(req.body);
    const newUser = await createUser(userTemplate);
    if (!newUser) {
      return res.status(404).send("Error creating user");
    }

    return res.status(200).json(newUser);
  });

  router.get("/:id", async (req: Request, res: Response) => {
    const user = await getUser(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }

    return res.status(200).json(user);
  });

  router.put("/:id", authMiddleware, async (req: Request, res: Response) => {
    const userTemplate: User = await createUserTemplate(req.body);
    const updatedUser = await updateUser(userTemplate);
    if (!updatedUser) {
      return res.status(404).send("Error updating user");
    }

    return res.status(200).json(updatedUser);
  });

  router.delete("/:id", authMiddleware, async (req: Request, res: Response) => {
    const deletedUser = await deleteUser(req.params.id);
    if (!deletedUser) {
      return res.status(404).send("Error deleting user");
    }

    return res.status(200).json(deletedUser);
  });
};
