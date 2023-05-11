import * as dotenv from 'dotenv';

dotenv.config();

export default {
  DATABASE_PORT: process.env.DATABASE_PORT || 5432,
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
  DATABASE_USER: process.env.DATABASE_USER || 'admin',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'admin',
  DATABASE: process.env.DATABASE || 'barbershop',
  RMQ_USER: process.env.RMQ_USER || 'admin',
  RMQ_PASSWORD: process.env.RMQ_PASSWORD || 'admin',
  RMQ_QUEUE: process.env.RMQ_QUEUE || 'scheduleQueue',
  RMQ_URL: process.env.RMQ_URL || 'localhost:5672',
};
