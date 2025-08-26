import { Router, Request, Response } from "express";
const recommendRoute = Router();

import UserController from "../controllers/UserController";
const { getUserShareLink, sendShareLink } = UserController;

recommendRoute.route("/link")
  .get(getUserShareLink)
  .post(sendShareLink);

// POST example
recommendRoute.post("/", (req: Request, res: Response) => {
  const { name, email } = req.body;
  res.json({ success: true, message: `Recommendation received for ${name}`, email });
});

export default recommendRoute;
