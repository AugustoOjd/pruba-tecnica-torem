
export interface IMessage {
    id?: string,
    timestamp: Date,
    isReceived: boolean,
    text: string,
    latitude?: string,
    longtitude?: string
}