import { Entity, Column } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity({ name: "User" })
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column()
  photo: string;

  @Column()
  email: string;

  @Column({ default: false })
  isRoot: boolean;

  @Column()
  password: string;
}
