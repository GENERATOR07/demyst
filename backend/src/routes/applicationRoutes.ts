import express from "express";
import { submitLoanApplication } from "../controllers/applicationController";

const router = express.Router();

router.post("/submit-application", submitLoanApplication);

export default router;
