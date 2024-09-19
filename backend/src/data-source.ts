// src/data-source.ts

import "reflect-metadata";
import { DataSource } from "typeorm";
import { Project } from "./entity/Project";
import { Process } from "./entity/Process";
import { Task } from "./entity/Task";
import { User } from "./entity/User";
// 必要なエンティティをすべてインポート

export const AppDataSource = new DataSource({
  type: "sqlite", // データベースの種類
  database: "./database.sqlite", // データベースファイルのパス
  synchronize: true, // エンティティとデータベースの同期
  logging: false, // ログの出力設定
  entities: [Project, Process, Task, User], // エンティティの登録
  migrations: ["src/migration/**/*.ts"], // マイグレーションファイルのパス
  subscribers: ["src/subscriber/**/*.ts"], // サブスクライバファイルのパス
});
