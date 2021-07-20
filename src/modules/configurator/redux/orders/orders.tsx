import React from "react"
import { orderState } from "./actions"

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
