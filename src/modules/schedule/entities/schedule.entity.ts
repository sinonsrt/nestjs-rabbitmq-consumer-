import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { User } from './user.entity';
import { Cart } from './cart.entity';

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  scheduled_date: Date;

  @Column({ default: new Date() })
  created_at: Date;

  @Column({ default: new Date() })
  updated_at: Date;

  @OneToOne(() => Cart, (cart) => cart.id)
  cart: Relation<Cart>;

  @ManyToOne(() => User, (user) => user.schedule)
  user: Relation<User>;
}
