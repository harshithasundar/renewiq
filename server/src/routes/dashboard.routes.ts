import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import { dashboard } from "../controllers/dashboard.controller";

const router = Router();

router.get("/", authenticate, dashboard);

export default router;