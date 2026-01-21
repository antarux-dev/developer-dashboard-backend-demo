import express from "express";
import { setPositions, getPositions } from "@/controllers/plrPositions";

const router = express.Router();

router.post("/set-positions", setPositions);
router.get("/get-positions", getPositions);

export default router;
