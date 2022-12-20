import Server from './models/server'
import Chat from './models/chat'
import TextMessage from './models/textMessage'

const server = new Server()
// const chat = new Chat(true, 'jose', 'martinez', {}) 

const chat = new TextMessage( new Date( Date.now()), true)
let agregarM = chat.addText('hola quiero hacerles una pregunta')


console.log( agregarM )
server.listen()

// const chat = {
//     id: 'id del chat',
//     isFavourite: 'true o false si es marcado como favorito',
//     customer: {
//         id: 'id customer',
//         firstName: 'nombre',
//         lastName: 'apellido',
//         type: {
//             vip: {
//                 state: 'boolean true or flase',
//                 creditCart: 'string'
//             },
//             regular: {
//                 state: 'boolean true or false',
//                 phoneNumber: 'string'
//             } 
//         }
//     },
//     messages: [
//         {
//             id: 'id mensaje',
//             timestamp: 'Fecha y hora tipo date',
//             isReceived: 'boolean, enviado o recibido por la empresa',
//             text: 'Cuerpo del mensaje tipo string',
//             latitude: 'latitud tipo string',
//             longitude: 'longitud tipo string' 
//         }
//     ]
// }

// console.log(chat)
