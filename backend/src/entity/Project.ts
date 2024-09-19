import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Process } from "./Process";

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  ProjectID!: number;

  @Column()
  ProjectName!: string;

  @Column({ type: "text", nullable: true })
  Description: string | undefined;

  @Column({ type: "date", nullable: true })
  StartDate: Date | undefined;

  @Column({ type: "date", nullable: true })
  EndDate: Date | undefined;

  @Column({ nullable: true })
  Status: string | undefined;

  @OneToMany(() => Process, (process) => process.Project)
  Processes: Process[] | undefined;
}
