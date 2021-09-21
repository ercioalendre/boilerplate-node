import express from "express";

const router = express.Router();

router.get("/", (req, res) => res.send("Hello World!"));
router.get("*", (req, res) => res.send("404 - Page not found!"));

export default router;
