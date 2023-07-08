import Payment from './events/payment'
import Marketing  from './observers/marketing'
import Shipment  from './observers/shipment'

import PaymentSubject from './subjects/paymentSubject'

const subject = new PaymentSubject ()
const marketing = new Marketing()
subject.subscribe(marketing)

const shipment = new Shipment()
subject.subscribe(shipment)

const payment = new Payment(subject)
payment.creditCard({userName:'Anderson', id: Date.now()})


subject.unsubscribe(marketing)
payment.creditCard({userName:'Mivane', id: Date.now()})
