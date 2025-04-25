import express from "express";
import {
  getUsers,
  addUser,
  deleteUser
} from "../Controllers/users.js";

const router = express.Router();

import { updateUser } from "../Controllers/users.js";


router.get("/usuarios", getUsers);
router.post("/usuarios", addUser);
router.put("/usuarios/:id", updateUser);
router.delete("/usuarios/:id", deleteUser);

export default router;
