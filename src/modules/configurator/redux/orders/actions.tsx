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
  return (dispatch: any, getState: any) => {
    const id = getState().auth.id
    database
      .ref(`users/${id}/orders`)
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
export const setOrdersFromDatabase = (orders: orderState[]) => ({
  type: "SET_ORDERS_FROM_DATABASE",
  orders,
})

export const startSetOrdersFromDatabase = () => {
  return (dispatch: any, getState: any) => {
    const id = getState().auth.id
    return database
      .ref(`/users/${id}/orders`)
      .once("value")
      .then(snapshot => {
        const orders = []
        snapshot.forEach(childSnapshot => {
          orders.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          })
        })
        dispatch(setOrdersFromDatabase(orders))
      })
  }
}
