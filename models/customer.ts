

export default abstract class Customer {
    
    #firstName:string
    #lastName:string
    #customer: Object

    constructor(firstName: string, lastName: string, customer: Object){
        this.#firstName = firstName
        this.#lastName  = lastName
        this.#customer  = customer
    }
}
