import { Router } from "express";
import { AppDataSource } from "../data-source";
import { Project } from "../entity/Project";

const router = Router();

router.get("/", async (req, res) => {
  const projects = await AppDataSource.getRepository(Project).find();
  res.json(projects);
});

router.post("/", async (req, res) => {
  const project = AppDataSource.getRepository(Project).create(req.body);
  const result = await AppDataSource.getRepository(Project).save(project);
  res.status(201).json(result);
});

export default router;
