// src/entity/Task.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Process } from "./Process";
import { User } from "./User";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  TaskID!: number;

  @Column()
  TaskName!: string;

  @Column({ type: "text", nullable: true })
  Description!: string;

  @Column({ type: "decimal", nullable: true })
  EstimatedHours?: number;

  @Column({ type: "decimal", nullable: true })
  ActualHours?: number;

  @Column({ type: "date", nullable: true })
  StartDate?: Date;

  @Column({ type: "date", nullable: true })
  EndDate?: Date;

  @Column({ nullable: true })
  Status!: string;

  @ManyToOne(() => Process, (process) => process.Tasks, { nullable: false })
  Process!: Process;

  @ManyToOne(() => User, (user) => user.Tasks, { nullable: true })
  User?: User;
}
