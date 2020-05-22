import express from "express";
import bodyParser from "body-parser";
import ConfigRepository from "./adapters/secondary/repositories/real/config/config.real.repository";
import router from "./adapters/primary/routes/index.route";

let app;
try {
  app = express();
  ConfigRepository.connect();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api/", router);
  app.listen(8080, () => console.log("Server started"));
} catch (err) {
  console.log(err);
}
export default app;
