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
  EstimatedHours: number | undefined;

  @Column({ type: "decimal", nullable: true })
  ActualHours: number | undefined;

  @Column({ type: "date", nullable: true })
  StartDate: Date | undefined;

  @Column({ type: "date", nullable: true })
  EndDate: Date | undefined;

  @Column({ nullable: true })
  Status!: string;

  @ManyToOne(() => Process, (process) => process.Tasks, { nullable: false })
  Process!: Process;

  @ManyToOne(() => User, (user) => user.Tasks, { nullable: true })
  User?: User;
}
