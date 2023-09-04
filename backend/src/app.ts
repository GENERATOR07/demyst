import express from "express";
import bodyParser from "body-parser";

import routes from "./routes";
import errorHandler from "./middleware/errorHandler";

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes

app.use("/api", routes);

//error handling middleware

app.use(errorHandler);

export default app;
