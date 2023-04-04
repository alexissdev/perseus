import express, { Application } from "express";
import config from "../config/config";
import api from "../api/index";

export default () => {
  const app: Application = express();

  app.use(express.json());
  app.use(config.api.prefix, api());

  return app;
}