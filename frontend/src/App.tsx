import React, { useEffect, useState } from "react";
import axios from "axios";

interface Project {
  ProjectID: number;
  ProjectName: string;
  Description?: string;
  StartDate?: string;
  EndDate?: string;
  Status?: string;
}

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    axios
      .get<Project[]>("/api/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

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
