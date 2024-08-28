// src/data-source.ts
import { DataSource } from 'typeorm';
import { Airport } from './entity/Airport';
import { City } from './entity/City';
import { Country } from './entity/Country';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'prangya01',
    password: 'root',
    database: 'airport_db',
    entities: [Airport, City, Country],
    synchronize: true,
    logging: true,
});
