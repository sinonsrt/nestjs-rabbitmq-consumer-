import { DataSource } from 'typeorm';
import env from '../config/env';

export const databaseProviders = [
  {
    provide: 'BARBERSHOP_DB',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: env.DATABASE_HOST,
        port: env.DATABASE_PORT,
        username: env.DATABASE_USER,
        password: env.DATABASE_PASSWORD,
        database: env.DATABASE,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource
        .initialize()
        .then(() => console.log('Database connected ✅'));
    },
  },
];
