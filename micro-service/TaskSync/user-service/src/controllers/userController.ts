import { NextFunction, Request, Response } from "express";
import UserModel from "../models/userModel";
import { CreateUserRequest, UpdateUserRequest, UserResponse } from "../types";
import userModel from "../models/userModel";

class UserController {
  // Create a new user
  async createUser(
    req: Request<{}, {}, CreateUserRequest>,
    res: Response<{ success: boolean; data?: UserResponse; error?: string }>
  ) {
    const { name, username, email, password } = req.body;

    try {
      const user = await UserModel.create({ name, username, email, password });
      res.status(201).json({
        success: true,
        data: {
          id: user._id.toString(),
          username,
          name: user.name,
          email: user.email,
        },
      });
    } catch (err) {
      res.status(400).json({ success: false, error: (err as Error).message });
    }
  }

  async checkUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await userModel.findOne({ username: req.params.username });
      if (!user) {
        return res.json({ userFind: false, success: false });
      }
      res.json({ userFind: true, success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
    }
  }

  // Fetch all users
  async getUsers(
    req: Request<{}, {}, {}, {}>,
    res: Response<{ success: boolean; data?: UserResponse[]; error?: string }>
  ) {
    try {
      const users = await UserModel.find();
      res.status(200).json({
        success: true,
        data: users.map((user) => ({
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          username: user.username,
        })),
      });
    } catch (err) {
      res.status(400).json({ success: false, error: (err as Error).message });
    }
  }

  // Fetch user by ID
  async getUserById(req: Request<{ id: string }>, res: any) {
    const { id } = req.params;

    try {
      const user = await UserModel.findById(id);

      if (!user) {
        return res
          .status(404)
          .json({ success: false, error: "User not found" });
      }

      res.status(200).json({
        success: true,
        data: { id: user._id.toString(), name: user.name, email: user.email },
      });
    } catch (err) {
      res.status(400).json({ success: false, error: (err as Error).message });
    }
  }

  // Update user by ID
  async updateUser(
    req: Request<{ id: string }, {}, UpdateUserRequest>,
    res: any
  ) {
    const { id } = req.params;
    const { name, email } = req.body;

    try {
      const user = await UserModel.findByIdAndUpdate(
        id,
        { name, email },
        { new: true, runValidators: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ success: false, error: "User not found" });
      }

      res.status(200).json({
        success: true,
        data: { id: user._id.toString(), name: user.name, email: user.email },
      });
    } catch (err) {
      res.status(400).json({ success: false, error: (err as Error).message });
    }
  }

  // Delete user by ID
  async deleteUser(req: Request<{ id: string }>, res: any) {
    const { id } = req.params;

    try {
      const user = await UserModel.findByIdAndDelete(id);

      if (!user) {
        return res
          .status(404)
          .json({ success: false, error: "User not found" });
      }

      res
        .status(200)
        .json({ success: true, message: "User deleted successfully" });
    } catch (err) {
      res.status(400).json({ success: false, error: (err as Error).message });
    }
  }
}

export default new UserController();
