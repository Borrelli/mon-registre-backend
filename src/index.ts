import express from "express";
import bodyParser from "body-parser";
import ConfigRepository from "./adapters/secondary/repositories/real/config/config.real.repository";

let app;
try {
  app = express();
  ConfigRepository.connect();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.listen(8080, () => {
    console.log("Server started");
  });
} catch (err) {
  console.log(err);
}
export default app;
