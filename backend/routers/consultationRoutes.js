import express from "express";
import { submitConsultation } from "../controllers/consultationController.js";

const router = express.Router();

// POST request endpoint
router.post("/", submitConsultation);

export default router;