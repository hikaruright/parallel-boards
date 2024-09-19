// src/entity/Process.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Relation,
  OneToMany,
} from "typeorm";
import { Project } from "./Project";
import { Task } from "./Task";

@Entity()
export class Process {
  @PrimaryGeneratedColumn()
  ProcessID!: number;

  @Column()
  ProcessName!: string;

  @Column({ type: "text", nullable: true })
  Description!: string;

  @Column({ type: "decimal", nullable: true })
  EstimatedHours!: number;

  @Column({ type: "date", nullable: true })
  StartDate: Date | undefined;

  @Column({ type: "date", nullable: true })
  EndDate: Date | undefined;

  @Column({ nullable: true })
  Status!: string;

  @ManyToOne(() => Project, (project) => project.Processes)
  Project!: Project;

  @OneToMany(() => Task, (task) => task.Process)
  Tasks!: Relation<Task[]>;
}
