import { Response } from "express";

const errorResponse = (res: Response, status_code: number, message: String, data: any = null, errors: any) => {
    return res.status(status_code).json({
        status: status_code,
        success: false, message,
        data: data || null,
        errors: errors || null
    });
};

const successResponse = (res: Response, status_code: number, message: String, data: any = null) => {
    return res.status(status_code).json({
        status: status_code,
        success: true, message,
        data: data || null
    });
};

export default { errorResponse, successResponse };
