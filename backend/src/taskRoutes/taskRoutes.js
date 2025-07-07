import express from 'express';
import { getTaskbyId } from '../controllers/taskController.js';
import { getAllData } from '../controllers/taskController.js';
import { createTask } from '../controllers/taskController.js';
import { updateTask } from '../controllers/taskController.js';
import { deleteTask } from '../controllers/taskController.js';

export const taskRoutes = express.Router();

taskRoutes.get("/", getAllData);
taskRoutes.get("/:id", getTaskbyId);
taskRoutes.post("/", createTask);
taskRoutes.put("/:id", updateTask);
taskRoutes.delete("/:id", deleteTask);