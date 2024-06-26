import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
});

router.post("/tasks", async (req, res) => {
  const { title, description } = req.body;
  const task = new Task({ title, description });
  await task.save();
  res.json(task);
});

router.get("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({message: "task not fund"})
    res.send(task);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/tasks/:id", async(req, res) => {
const task = await Task.findByIdAndDelete(req.params.id);
return res.json(task);
});

router.put("/tasks/:id", async(req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.send(updatedTask)
});

export default router;
