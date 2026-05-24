import { DataSource } from "typeorm"

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5437,
    username: 'postgres',
    password: 'postgresql',
    database: 'dbTornillo',
    entities: ['src/**/*.entity.ts'],
    migrations: ['src/database/migrations/*.ts']
});