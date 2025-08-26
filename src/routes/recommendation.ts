import { Router } from "express";
const recommendRoute = Router();

import UserController from "../controllers/UserController";
const { getUserShareLink, sendShareLink } = UserController;

recommendRoute.route("/link")
  .get(getUserShareLink)
  .post(sendShareLink);

export default recommendRoute;
