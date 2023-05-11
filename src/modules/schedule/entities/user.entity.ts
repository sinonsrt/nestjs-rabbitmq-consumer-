import { Entity, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { Schedule } from './schedule.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Schedule, (schedule) => schedule.user)
  schedule: Relation<Schedule[]>;
}
