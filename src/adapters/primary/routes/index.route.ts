import express from "express";

import { RoutesDir } from "./routes-type";
import userRoute from "./user.route";

const router = express.Router();

router.use(RoutesDir.USER, userRoute);

export default router;
