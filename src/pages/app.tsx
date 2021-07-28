import React from "react"
import { Router } from "@reach/router"
import { RouteComponentProps } from "@reach/router"
import Configurator from "./configurator"
import Checkout from "./checkout"
import OrderSuccessful from "./orderSuccessful"
import OrderHistory from "./orderHistory"

const App = () => (
  <Router>
    <RouterPage path="app/configurator" pageComponent={<Configurator />} />
    <RouterPage path="app/checkout" pageComponent={<Checkout />} />
    <RouterPage
      path="app/orderSuccessful"
      pageComponent={<OrderSuccessful />}
    />
    <RouterPage path="app/orderHistory" pageComponent={<OrderHistory />} />
  </Router>
)
export default App
const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent
