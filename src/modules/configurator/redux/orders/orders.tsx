import React from "react"
import { orderState } from "./actions"

interface setOrdersAction {
  type: "SET_ORDERS"
  order: orderState
}
interface setOrdersFromDatabase {
  type: "SET_ORDERS_FROM_DATABASE"
  orders: orderState[]
}
type Action = setOrdersAction | setOrdersFromDatabase
const orderReducerDefaultState: orderState[] = []

export default (
  state = orderReducerDefaultState,
  action: Action
): orderState[] => {
  switch (action.type) {
    case "SET_ORDERS":
      return [...state, action.order]
    case "SET_ORDERS_FROM_DATABASE":
      return [...action.orders]
    default:
      return state
  }
}
