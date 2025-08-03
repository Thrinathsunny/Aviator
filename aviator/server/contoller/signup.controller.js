import { SignupService } from "../service/signup.service.js";

  class SignupContoller {
    constructor() {
        this.singupService = new SignupService;
    }

      signUp = async (req,res)=> {
          try {
            console.log(req.body,'this is the reqbody')
            const user = await this.singupService.signup(req.body)
            
            res.status(200).send(user)
            
          } catch (error) {
            res.status(400).send(err)
          }
    }
    
 }


export default SignupContoller;