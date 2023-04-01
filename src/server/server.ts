import express, { Application } from "express";

export default class Server {
  private app: Application;
  private static PORT: number = process.env.PORT
    ? parseInt(process.env.PORT)
    : 3000;

  constructor() {
    this.app = express();
  }

  public start(): void {
    this.config();
    this.app.listen(Server.PORT, () => {
      console.log(`Server is running on port ${Server.PORT}`);
    });
  }

  private config(): void {
    this.app.use(express.json());
  }
}
