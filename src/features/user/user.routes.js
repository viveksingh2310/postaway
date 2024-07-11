import express from "express";
import UserController from "./user.controller.js";

export const UserRoute=express.Router();
UserRoute.post('/signup',UserController.signup);
UserRoute.post('/signin',UserController.signin);