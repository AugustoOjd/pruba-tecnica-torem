
export default abstract class Message {

    #timestamp:   Date
    #isReceived:  boolean

    constructor(timestamp: Date = new Date(Date.now()), isReceived: boolean){
        this.#timestamp     = timestamp
        this.#isReceived    = isReceived
    }

    showTimestamp(){
        return this.#timestamp
    }

    showStatus(){
        return this.#isReceived
    }

}