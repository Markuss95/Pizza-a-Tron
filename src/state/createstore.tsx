import React from "react"
import { createStore as reduxCreateStore, combineReducers } from "redux"
import currentOrderReducer from "../modules/configurator/redux/current_order/order"
import allOrdersReducer from "../modules/configurator/redux/orders/orders"

const initialState = {
  toppings: [],
  toppingsPrice: 0,
  pizzaSize: "",
  quantity: 1,
  orderPrice: 0,
}

const createStore = () =>
  reduxCreateStore(
    combineReducers({
      currentOrder: currentOrderReducer,
      orders: allOrdersReducer,
    })
  )

export default createStore
