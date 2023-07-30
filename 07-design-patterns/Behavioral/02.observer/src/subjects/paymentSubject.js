export default class PaymentSubject{

    #obsersers = new Set()
    notify(data){
        this.#obsersers.forEach(observer => {
            observer.update(data)
        })
    }

    subscribe(observable){
        this.#obsersers.add(observable)
    }

    unsubscribe(observable){
        this.#obsersers.delete(observable)
    }
}

