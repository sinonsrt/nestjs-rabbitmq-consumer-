import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @OneToOne((type) => Cart)
  cart: Cart;

  @OneToOne((type) => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;
}

export class Cart {
  @PrimaryGeneratedColumn()
  id: number;
}

export class User {
  @PrimaryGeneratedColumn()
  id: number;
}
