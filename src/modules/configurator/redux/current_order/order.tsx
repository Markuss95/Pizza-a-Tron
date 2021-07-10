import React from "react"

interface orderState {
  toppings: string[]
  toppingsPrice: number
  pizzaSizePrice: number
  quantity: number
  orderPrice: number
  discount: boolean
  pizzaSize: string
}
interface SetToppingsPriceAction {
  type: "SET_TOPPINGS_PRICE"
  price: number
}
interface SetSizeAction {
  type: "SET_SIZE"
  size: string
}
interface SetSizePriceAction {
  type: "SET_SIZE_PRICE"
  price: number
}
interface SetDiscountAction {
  type: "SET_DISCOUNT"
  discount: boolean
}
interface SetQuantityAction {
  type: "SET_QUANTITY"
  quantity: number
}
interface setToppingsAction {
  type: "SET_TOPPINGS"
  toppings: string[]
}
interface setOrderPriceAction {
  type: "SET_ORDER_PRICE"
  price: number
}
interface setStateDefaultAction {
  type: "SET_STATE_DEFAULT"
}

type Action =
  | SetToppingsPriceAction
  | SetSizePriceAction
  | SetDiscountAction
  | SetQuantityAction
  | setToppingsAction
  | setOrderPriceAction
  | SetSizeAction
  | setStateDefaultAction

const orderReducerDefaultState: orderState = {
  toppings: [],
  toppingsPrice: 0,
  pizzaSizePrice: 0,
  quantity: 1,
  orderPrice: 0,
  discount: false,
  pizzaSize: "L",
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
    case "SET_SIZE":
      return {
        ...state,
        pizzaSize: action.size,
      }
    case "SET_DISCOUNT":
      return {
        ...state,
        discount: action.discount,
      }
    case "SET_QUANTITY":
      return {
        ...state,
        quantity: action.quantity,
      }
    case "SET_TOPPINGS":
      return {
        ...state,
        toppings: action.toppings,
      }
    case "SET_ORDER_PRICE": {
      return {
        ...state,
        orderPrice: action.price,
      }
    }
    case "SET_STATE_DEFAULT": {
      return {
        ...state,
        ...orderReducerDefaultState,
      }
    }
    default:
      return state
  }
}
