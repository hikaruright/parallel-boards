import "reflect-metadata";
import express from "express";
import { DataSource } from "typeorm";
import { Project } from "./entity/Project";
import { Process } from "./entity/Process";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

// データベース接続設定
export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./database.sqlite",
  synchronize: true,
  entities: [Project, Process], // 他のエンティティも追加
});

// データベース接続
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");

    // ルーティングの設定
    const projectRouter = require("./routes/project");
    app.use("/api/projects", projectRouter);

    // サーバーの起動
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
