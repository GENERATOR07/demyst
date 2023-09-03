import express from "express";
import balanceSheetRoutes from "./balanceSheetRoutes";
import applicationRoutes from "./applicationRoutes";

const router = express.Router();

router.use("", balanceSheetRoutes);
router.use("", applicationRoutes);

export default router;
