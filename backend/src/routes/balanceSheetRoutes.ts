import express from "express";
import { getBalanceSheet } from "../controllers/balanceSheetController";

const router = express.Router();

router.post("/balance-sheet", getBalanceSheet);

export default router;
