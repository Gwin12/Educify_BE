import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

import recommendationRouter from "./routes/recommendation";
import errorHandler from "./utils/errorHandler";

// Routes
app.get("/", (req: Request, res: Response) => {
    res.send("Backend running...");
});
app.use("/api/recommendations", recommendationRouter);
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
