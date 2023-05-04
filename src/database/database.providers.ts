import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'BARBERSHOP_DB',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'admin',
        password: 'admin',
        database: 'barbershop',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource
        .initialize()
        .then(() => console.log('Database connected ✅'));
    },
  },
];
