import Customer from './customer'

export default class Chat extends Customer {
    #isFavourite: boolean

    constructor(isFavourite: boolean, firstName: string, lastName: string, customer: Object){
        super(firstName,lastName, customer)
        this.#isFavourite = isFavourite
    }

}
