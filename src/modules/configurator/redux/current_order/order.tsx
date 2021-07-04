import React from "react"

interface orderState {
  toppings: string[]
  toppingsPrice: number
  pizzaSize: string
  quantity: number
  orderPrice: number
}
interface SetToppingsPriceAction {
  type: "SET_TOPPINGS_PRICE"
  payload: number
}

const orderReducerDefaultState: orderState = {
  toppings: [],
  toppingsPrice: 0,
  pizzaSize: "",
  quantity: 1,
  orderPrice: 0,
}

export default (
  state = orderReducerDefaultState,
  action: SetToppingsPriceAction
): orderState => {
  switch (action.type) {
    default:
      return state
  }
}
