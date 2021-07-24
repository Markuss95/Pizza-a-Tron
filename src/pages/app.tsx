import React from "react"
import { Router } from "@reach/router"
import { Layout, Toppings } from "../components"
import { RouteComponentProps } from "@reach/router"
import Configurator from "./configurator"
const App = () => (
  <Router>
    <RouterPage path="app/configurator" pageComponent={<Configurator />} />
  </Router>
)
export default App
const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent
