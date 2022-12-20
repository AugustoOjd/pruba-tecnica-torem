import { Router } from "express"
import { getMessages, postMessages } from "../controllers/messages"

const router = Router()

router.post( '/:chatId', postMessages )

router.get( '/:chatId', getMessages)

export default router