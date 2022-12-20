import Customer from './customer'
import Message from './massage'

export default class Chat extends Message{
    #isFavourite: boolean

    constructor(isFavourite: boolean, timestamp: Date, isReceived: boolean){
        super(timestamp, isReceived)
        this.#isFavourite = isFavourite
    }

}
