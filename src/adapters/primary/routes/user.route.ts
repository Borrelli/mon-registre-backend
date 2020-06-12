import express from "express";
import { RoutesEndpoint } from "./routes-type";
import UserController from "../controllers/user.controller";
import UserDependency from "../../../configuration/dependencies/user.dependency";

const userRoute = express.Router();

userRoute.post(RoutesEndpoint.AUTH, [new UserController(new UserDependency()).create]);
userRoute.post(RoutesEndpoint.CREATE, [new UserController(new UserDependency()).create]);

export default userRoute;
