import { Task } from "@/interface/Task";
import axios from "./axios";
import { AxiosResponse } from "axios";

export const createTask = async (task: Task) => {
  await axios.post("/tasks", task);
};

export const getTasks = async () => {
  const response = await axios.get("/tasks");
  return response;
};

export const getOneTask = async (id: string) => {
  const response = await axios.get("/tasks/" + id);
  return response;
};

export const updateTask = async (id: string, task: Task) => {
  const response = await axios.put("/tasks/" + id, task);
  return response;
};

export const deleteTask = async (id: string,) => {
    const response = await axios.delete("/tasks/" + id);
    return response;
  };
