export default class Payment{
    constructor(paymentSubject){
        this.paymentSubject = paymentSubject
    }

    creditCard(paymentData){
        console.log(`\na payment ocurred from ${paymentData.useName}`)
        this.paymentSubject.notify(paymentData)
    }
}
