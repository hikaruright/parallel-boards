// src/entity/User.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Task } from "./Task";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  UserID!: number;

  @Column()
  Name!: string;

  @Column({ nullable: true })
  Department?: string;

  @Column({ nullable: true })
  Position?: string;

  @Column({ nullable: true })
  ContactInfo?: string;

  @OneToMany(() => Task, (task) => task.User)
  Tasks?: Task[];
}
