import { Request, Response} from 'express'
import LocationMessage from '../models/locationMessage'
import TextMessage from '../models/textMessage'


export const postMessages = async (req: Request, res: Response) => {
    
    const { chatId } = req.params
    const { text, prop, lati = 'any lati', long = 'any long'} = req.body

    const messages = new TextMessage(new Date( Date.now()), prop)

    const location = new LocationMessage(lati, long, messages.showTimestamp(), messages.showStatus())

    try {
        
        let message = messages.addText(text, chatId)
        let showloca = location.showLocation(lati, long)

        await res.status(200).json({
            ...message,
            ...showloca
        })
        
    } catch (error) {
        
        await console.log(error)
    }


}



export const getMessages = ((req: Request, res: Response) => {


})