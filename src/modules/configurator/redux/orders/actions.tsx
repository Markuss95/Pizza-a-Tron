import database from "../../../firebase/firebase"

export interface orderState {
  id: string
  toppings: string[]
  toppingsPrice: number
  pizzaSizePrice: number
  quantity: number
  orderPrice: number
  discount: boolean
  date: string
  address?: {
    streetAndNumber: string
    city: string
    postalCode: number
    country: string
  }
}

export const setOrders = (order: orderState) => ({
  type: "SET_ORDERS",
  order,
})

export const startSetOrders = (order: orderState) => {
  return (dispatch: any) => {
    database
      .ref("orders")
      .push(order)
      .then(ref => {
        dispatch(
          setOrders({
            id: ref.key,
            ...order,
          })
        )
      })
  }
}
