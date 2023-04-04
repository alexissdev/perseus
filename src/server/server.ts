import environmentLoader from "../loaders/environment.loader";
import config from "../config/config";
import mongooseLoader from "../loaders/mongoose.loader";
import expressLoader from "../loaders/express.loader";


export default class Server {

  public start(): void {
    environmentLoader();
    mongooseLoader();

    const port: number = config.port;
    expressLoader().listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}
