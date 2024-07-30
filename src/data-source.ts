import 'dotenv/config';
import "reflect-metadata";

import { DataSource, DataSourceOptions } from 'typeorm';

export const DataSourceConfig = (): DataSourceOptions => {

    if (!process.env.DATABASE_URL){
        throw new Error("Database doesn't found !")
    }

    return{
        type:"postgres",
        url:process.env.DATABASE_URL,
        synchronize: true,
        logging: true,
        entities:["src/entities/**"],
        migrations:["src/migrations/**"]
    }
}

export const AppDataSource = new DataSource(DataSourceConfig())