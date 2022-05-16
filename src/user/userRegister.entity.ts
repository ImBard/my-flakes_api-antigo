import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column({ length: 40 })
  name_user: string;

  @Column({length: 255})
  email_user: string;

  @Column({length: 255})
  password_user: string;
  
}