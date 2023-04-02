import express, { Application } from "express";
import api from "../api/index";

export default () => {
  const app: Application = express();

  app.use(express.json());
  app.use("/api", api());

  return app;
}