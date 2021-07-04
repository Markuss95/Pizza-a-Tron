import React from "react"

interface orderState {
  toppings: string[]
  toppingsPrice: number
  pizzaSizePrice: number
  quantity: number
  orderPrice: number
}
interface SetToppingsPriceAction {
  type: "SET_TOPPINGS_PRICE"
  price: number
}
interface SetSizePriceAction {
  type: "SET_SIZE_PRICE"
  price: number
}

type Action = SetToppingsPriceAction | SetSizePriceAction

const orderReducerDefaultState: orderState = {
  toppings: [],
  toppingsPrice: 0,
  pizzaSizePrice: 0,
  quantity: 1,
  orderPrice: 0,
}
export default (
  state = orderReducerDefaultState,
  action: Action
): orderState => {
  switch (action.type) {
    case "SET_TOPPINGS_PRICE":
      return {
        ...state,
        toppingsPrice: action.price,
      }
    case "SET_SIZE_PRICE":
      return {
        ...state,
        pizzaSizePrice: action.price,
      }

    default:
      return state
  }
}
