import React from "react"

interface orderState {
  toppings: string[]
  toppingsPrice: number
  pizzaSizePrice: number
  quantity: number
  orderPrice: number
  discount: boolean
}
interface SetToppingsPriceAction {
  type: "SET_TOPPINGS_PRICE"
  price: number
}
interface SetSizePriceAction {
  type: "SET_SIZE_PRICE"
  price: number
}
interface SetDiscountAction {
  type: "SET_DISCOUNT"
  discount: boolean
}

type Action = SetToppingsPriceAction | SetSizePriceAction | SetDiscountAction

const orderReducerDefaultState: orderState = {
  toppings: [],
  toppingsPrice: 0,
  pizzaSizePrice: 0,
  quantity: 1,
  orderPrice: 0,
  discount: false,
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
    case "SET_DISCOUNT":
      return {
        ...state,
        discount: action.discount,
      }

    default:
      return state
  }
}
