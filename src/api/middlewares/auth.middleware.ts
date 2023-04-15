import { Request, Response, NextFunction } from "express";

import config from "../../config/config";
import { verifyToken } from "../../services/auth.service";

export default async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const possibleToken = req.headers[config.api.authorizationKey] as string;
  if (!possibleToken) {
    return res.status(404).send({
      auth: false,
      message: "No token provided",
    });
  }

  const decoded = await verifyToken(possibleToken);
  if (!decoded) {
    return res.status(400).send({
      auth: false,
      message: "Invalid token",
    });
  }

  return next();
}
