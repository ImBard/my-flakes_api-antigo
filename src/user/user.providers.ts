import { DataSource } from 'typeorm';
import { User } from './userRegister.entity';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (connection: DataSource) => connection.getRepository(User),
    inject: ['DATABASE_CONNECTION'],
  },
];