import { AppDataSource } from "../database/db.js";
import {User} from "../database/user.model.js";



export class SignupService{
    constructor(){

    }

    async signup(body) {
       try {
           const { username, email, password } = body;
      const userRepo = AppDataSource.getRepository(User)
           const createUser = userRepo.create({
               username,
               email,
               password
           })
           userRepo.save(createUser)
           console.log(username, email, password)
           
           return username
       } catch (error) {
          return error
       }
    }
}
