import { Request, Response, NextFunction } from "express";

const errorHandler = (
    err: unknown,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

    let message = "An error has occurred. Please try again later";
    if (err instanceof Error) {
        message = err.message;
    } else if (typeof err === "string") {
        message = err;
    }

    return res.status(statusCode).json({
        status: statusCode,
        success: false,
        message,
        errors: err || null,
    });
};

export default errorHandler;
