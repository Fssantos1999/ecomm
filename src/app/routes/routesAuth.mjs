import { Router } from "express";
import SessionController from "../controller/SessionController.mjs";

const router = Router();

router.post("/login",SessionController.createSession);



export default router;