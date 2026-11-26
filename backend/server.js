import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dns from "dns";

import consultationRoutes from "./routers/consultationRoutes.js";
import contactRoutes from "./routers/contactRoutes.js";
import subscribeRoutes from "./routers/subscribeRoutes.js"; // 👈 Import subscribe router

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

dns.setServers(["1.1.1.1", "8.8.8.8"]);

app.get("/", (req, res) => {
  res.send("this is the manage dubai property backend");
});

// ROUTES
app.use("/api/consultation", consultationRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/subscribe", subscribeRoutes); // 👈 Use subscribe route

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});