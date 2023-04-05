import Customer from "./Customer"
import Lemonade from "./Lemonade"
import LemonadeStand from "./LemonadeStand"

export default interface Order {
    id?: number
    customer: Customer
    lemonades: Lemonade[]
    lemonadeStand: LemonadeStand
    total?: number
}