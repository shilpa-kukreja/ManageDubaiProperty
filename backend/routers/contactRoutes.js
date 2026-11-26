import express from "express";
import { submitContactForm } from "../controllers/contactController.js";

const router = express.Router();

// POST request endpoint for the contact form
router.post("/", submitContactForm);

export default router;