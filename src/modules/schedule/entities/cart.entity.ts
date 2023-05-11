import { Entity, OneToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { Schedule } from './schedule.entity';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Schedule, (Schedule) => Schedule.cart)
  Schedule: Relation<Schedule>;
}
