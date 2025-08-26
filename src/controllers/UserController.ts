import { NextFunction, Request, Response } from "express";
import responses from "../utils/responses";
const { successResponse, errorResponse } = responses;
const shareLink = "http://localhost:3000/recommended"
import validateUser from "../validators/user";
import SendEmail from "../services/SendEmail";

class UserController {
    static async getUserShareLink(req: Request, res: Response, next: NextFunction) {
        try {
            return successResponse(res, 200, 'Link retrieved successfully.', shareLink);
        } catch (error) {
            next(error)
        }
    }

    static async sendShareLink(req: Request, res: Response, next: NextFunction) {
        try {
            const { value, error } = validateUser.sendLinkSchema.validate(req.body);
            if (error) return errorResponse(res, 400, error?.details[0]?.message, null, error)
            const { success } = await SendEmail(value?.email, "Recommendation Request", `Hello! Could you please help me with a recommendation? Here’s the link: ${shareLink}`)
            if (success) {
                return successResponse(res, 200, 'Recommendation request sent successfully.', shareLink);
            } else {
                return errorResponse(res, 500, 'Recommendation request failed to send', null, null);
            }
        } catch (error) {
            next(error)
        }
    }
}

export default UserController;