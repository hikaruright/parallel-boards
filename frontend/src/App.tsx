// src/App.tsx

import React from "react";
import useSWR from "swr";
import fetcher from "./api/fetcher";

interface Project {
  ProjectID: number;
  ProjectName: string;
  Description?: string;
  StartDate?: string;
  EndDate?: string;
  Status?: string;
}

const App: React.FC = () => {
  const { data: projects, error } = useSWR<Project[]>("/projects", fetcher);

  if (error) return <div>データの取得中にエラーが発生しました</div>;
  if (!projects) return <div>読み込み中...</div>;

  return (
    <div>
      <h1>プロジェクト管理ツール</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.ProjectID}>{project.ProjectName}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
