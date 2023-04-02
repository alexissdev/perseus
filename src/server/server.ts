import environmentLoader from "../loaders/environment.loader";
import mongooseLoader from "../loaders/mongoose.loader";
import expressLoader from "../loaders/express.loader";

export default class Server {
  private static PORT: number = process.env.PORT
    ? parseInt(process.env.PORT)
    : 3000;

  public start(): void {
    environmentLoader();
    mongooseLoader();
    expressLoader().listen(Server.PORT, () => {
      console.log(`Server is running on port ${Server.PORT}`);
    });
  }
}
