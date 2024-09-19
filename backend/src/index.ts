import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";
// src/index.ts
import projectRouter from "./routes/project";

const app = express();
app.use(express.json());

app.use("/api/projects", projectRouter);

AppDataSource.initialize()
  .then(() => {
    app.listen(3000, () => {
      console.log("バックエンドサーバーがポート3000で起動しました");
    });
  })
  .catch((error) => console.log(error));
