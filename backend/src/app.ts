import express from "express";
import bodyParser from "body-parser";
import balanceSheetRoutes from "./routes/balanceSheetRoutes";

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", balanceSheetRoutes);

export default app;
