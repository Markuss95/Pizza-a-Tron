import React from "react"

interface orderState {
  toppings: string[]
  toppingsPrice: number
  pizzaSizePrice: number
  quantity: number
  orderPrice: number
  discount: boolean
}
interface setOrdersAction {
  type: "SET_ORDERS"
  order: orderState
}
type Action = setOrdersAction
const orderReducerDefaultState: orderState[] = []

export default (
  state = orderReducerDefaultState,
  action: Action
): orderState[] => {
  switch (action.type) {
    case "SET_ORDERS":
      return [...state, action.order]
    default:
      return state
  }
}
