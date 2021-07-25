import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux"
import currentOrderReducer from "../modules/configurator/redux/current_order/order"
import allOrdersReducer from "../modules/configurator/redux/orders/orders"
import authReducer from "../modules/configurator/redux/authentication/auth"
import thunk from "redux-thunk"

const createStore = () =>
  reduxCreateStore(
    combineReducers({
      currentOrder: currentOrderReducer,
      orders: allOrdersReducer,
      auth: authReducer,
    }),
    applyMiddleware(thunk)
  )

export default createStore
