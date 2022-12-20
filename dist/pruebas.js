"use strict";
const chat = {
    isFavourite: true,
    customer: {
        firstName: 'josesito',
        lastName: 'martinez',
        typeCustomer: {}
    },
    messages: {
        timestamp: 'date',
        isReceived: 'boolean',
        body: {
            text: 'string'
        },
        location: {
            latitude: 'string',
            longitude: 'string'
        }
    }
};
console.log(chat);
