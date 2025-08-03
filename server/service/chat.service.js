import { AppDataSource } from "../database/db.js";

export class ChatService{
    constructor(){

    }

   async  createChat(data) {
       const chatRepo = AppDataSource.getRepository(Chat)
       return data
       
     }
}