import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Process } from "./Process";

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  ProjectID!: number;

  @Column()
  ProjectName!: string;

  @Column({ type: "text", nullable: true })
  Description?: string;

  @Column({ type: "date", nullable: true })
  StartDate?: Date;

  @Column({ type: "date", nullable: true })
  EndDate?: Date;

  @Column({ nullable: true })
  Status?: string;

  @OneToMany(() => Process, (process) => process.Project)
  Processes?: Process[];
}
