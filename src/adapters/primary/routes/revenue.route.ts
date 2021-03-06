import express from "express";
import { RoutesEndpoint } from "./routes-type";
import RevenueController from "../controllers/revenue.controller";
import RevenueDependency from "../../../configuration/dependencies/revenue.dependency";

const revenueRoute = express.Router();

revenueRoute.post(RoutesEndpoint.CREATE, [new RevenueController(new RevenueDependency()).create]);
revenueRoute.get(RoutesEndpoint.FIND_ALL, [new RevenueController(new RevenueDependency()).findAll]);

export default revenueRoute;
