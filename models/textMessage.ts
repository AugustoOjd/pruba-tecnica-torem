import Message from "./massage"


export default class TextMessage extends Message {
    #text:string

    constructor(timestamp: Date, isReceived: boolean){
        super( timestamp, isReceived)
        this.#text = ''
    }


    addText(text: string, id: string){
        this.#text = text
        
        let body = {
            id,
            text,
            timestamp:      super.showTimestamp(),
            isReceived:     super.showStatus()
        }

        return body
    }


}