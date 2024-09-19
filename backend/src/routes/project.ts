import { Router } from "express";
import { AppDataSource } from "../index";
import { Project } from "../entity/Project";

const router = Router();

// プロジェクト一覧の取得
router.get("/", async (req, res) => {
  const projectRepository = AppDataSource.getRepository(Project);
  const projects = await projectRepository.find();
  res.json(projects);
});

// プロジェクトの作成
router.post("/", async (req, res) => {
  const projectRepository = AppDataSource.getRepository(Project);
  const newProject = projectRepository.create(req.body);
  const result = await projectRepository.save(newProject);
  res.status(201).json(result);
});

// 他のCRUD操作も同様に追加

module.exports = router;
