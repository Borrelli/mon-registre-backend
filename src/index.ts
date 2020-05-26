import express from "express";
import bodyParser from "body-parser";
import ConfigRepository from "./adapters/secondary/repositories/real/config/config.real.repository";
import router from "./adapters/primary/routes/index.route";
import cors from "cors";

let app;
try {
  app = express();
  ConfigRepository.connect();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api/", router);
  app.listen(8080, () => console.log("Server started: http://localhost:8080"));
} catch (err) {
  console.log(err);
}
export default app;
