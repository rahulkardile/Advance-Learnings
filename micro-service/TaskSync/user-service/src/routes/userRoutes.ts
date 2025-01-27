import express, { NextFunction, Request, Response } from "express";
import userController from "../controllers/userController";

const router = express.Router();

router.post("/", userController.createUser);
router.get("/", userController.getUsers);
router.get("/check-user", userController.checkUser);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;
