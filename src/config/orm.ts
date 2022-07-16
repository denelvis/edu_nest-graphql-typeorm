import * as path from 'path';
import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
  type: 'sqlite',
  database: 'src/db/data/depot.db',
  logging: true,
  entities: [path.resolve(__dirname, '..', 'db', 'models', '*')],
  migrations: [path.resolve(__dirname, '..', 'db', 'migrations', '*')],
});
