
import { ChatService } from "../service/chat.service.js"
class ChatController {
    constructor() {
        this.chatService = new ChatService()

    }

    createChat = async (req, res) => {
        try {
            const user = await this.chatService.createChat(req.body)
            res.status(200).send(user)
        } catch (error) {
            
        }
    }
}

export default ChatController