import express from "express";
import { RoutesDir } from "./routes-type";
import userRoute from "./user.route";
import revenueRoute from "./revenue.route";

const router = express.Router();

router.use(RoutesDir.USER, userRoute);
router.use(RoutesDir.REVENUE, revenueRoute);

export default router;
