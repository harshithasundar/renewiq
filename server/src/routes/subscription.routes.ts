import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";

import {
  create,
  getAll,
  update,
  remove,
} from "../controllers/subscription.controller";

const router = Router();

router.post("/", authenticate, create);

router.get("/", authenticate, getAll);

router.patch("/:id", authenticate, update);

router.delete("/:id", authenticate, remove);

export default router;