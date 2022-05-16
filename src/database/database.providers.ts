import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'bdtcc.mysql.database.azure.com',
      port: 3306,
      username: 'UserPadrao',
      password: 'kGz6o&dvjHzL%YI',
      database: 'myFlakes',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: false,
    }),
  },
];