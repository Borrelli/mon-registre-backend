import express from "express";
import { RoutesEndpoint } from "./routes-type";
import UserController from "../controllers/user.controller";
import UserDependencies from "../../../configuration/dependencies/user.dependency";

const userRoute = express.Router();

userRoute.post(RoutesEndpoint.CREATE, [new UserController(new UserDependencies()).create]);

export default userRoute;