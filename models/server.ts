import express, {Application} from 'express'
import cors from 'cors'

// import routas
import chatsRouter from '../routes/chats'
import messagesRouter from '../routes/messages'

export default class ServerApp{

    #app: Application;
    #port: string;
    #paths = {
        chats: '/api/chats',
        messages: '/api/messages'
    }

    constructor(){
        this.#app    = express()
        this.#port   = process.env.PORT || '8080'

        // Middlewares
        this.middlewares();
        // Rutas
        this.routes();
    }



    middlewares(){

        // COR 
        this.#app.use( cors())
        // Lectura del body
        this.#app.use( express.json() )
    }


    routes(){
        this.#app.use( this.#paths.chats, chatsRouter)
        this.#app.use( this.#paths.messages, messagesRouter )
    }


    listen(){

        this.#app.listen( this.#port, () => console.log( `server escuchando en el puerto ${this.#port}`))
    }


}