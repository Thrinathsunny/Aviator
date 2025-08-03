import SignupContoller from "../contoller/signup.controller.js"
import ChatController from "../contoller/chat.controller.js"
import express from 'express'

export class SignUp {
    constructor() {
        this.signupCOntroller = new SignupContoller()
        this.createChat = new ChatController()
        this.router = express.Router()
        this.routes()
    }

    routes() {
        this.router.post('/signup', this.signupCOntroller.signUp),
        this.router.post('/chat',this.createChat.createChat)
    }


}

export default new SignUp().router