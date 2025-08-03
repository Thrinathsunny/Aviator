import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from './user.model.js' // your entity

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'bandlathrinath',
    password: '',
    database: 'chat',
    synchronize: true, // set to false in prod
    logging: false,
    entities: [User],  // include all your entities here
})
