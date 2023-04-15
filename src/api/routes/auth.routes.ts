import { Router, Request, Response } from "express";

import config from "../../config/config";
import { login, register, verifyToken } from "../../services/auth.service";

export default (app: Router): Router => {
  const router = Router();
  app.use("/auth", router);

  router.get("/login", async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const token = await login(email, password);
      return res.json({ token });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }

      return res.status(404).json({ error: "Unexpected error" });
    }
  });

  router.post("/register", async (req: Request, res: Response) => {
    try {
      const { _id, name, email, password } = req.body;
      const token = await register(_id, name, email, password);
      return res.json({ token });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }

      return res.status(404).json({ error: "Unexpected error" });
    }
  });

  router.get("/verify", async (req: Request, res: Response) => {
    try {
      const token = req.headers[config.api.authorizationKey] as string;
      if (!token) {
        return res
          .status(400)
          .json({ auth: false, error: "No token provided" });
      }

      const decoded = await verifyToken(token);
      if (!decoded) {
        return res.status(400).json({ auth: false, error: "Invalid token" });
      }

      return res.json({ auth: true, token: decoded });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }

      return res.status(404).json({ error: "Unexpected error" });
    }
  });

  return router;
};
