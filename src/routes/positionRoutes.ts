import express from "express";
import { 
    setPositions, 
    getPositions, 
    removeServer 
} from "@/controllers/plrPositions";

const router = express.Router();

router.post("/set-positions", setPositions);
router.get("/get-positions", getPositions);
router.post('/remove-server', removeServer);

export default router;
