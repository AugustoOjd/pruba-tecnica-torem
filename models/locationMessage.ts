import Message from "./massage";


export default class LocationMessage extends Message{
    #latitude: string
    #longitude: string

    constructor(latitude: string, longitude: string, timestamp: Date, isReceived: boolean ){
        super(timestamp, isReceived)
        this.#latitude      = latitude
        this.#longitude     = longitude
    }

    showLocation(latitude: string, longitude: string){

        this.#latitude  = latitude 
        this.#longitude = longitude

        let location = {
            latitude,
            longitude
        }

        return location
    }

    
}