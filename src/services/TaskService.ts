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
