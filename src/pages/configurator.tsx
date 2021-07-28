import React from "react"
import {
  Toppings,
  PizzaSizeSelector,
  DiscountComponent,
  ConfiguratorCheckout,
  Layout,
} from "../components"

const Configurator = () => {
  return (
    <Layout>
      <Toppings />
      <PizzaSizeSelector />
      <DiscountComponent />
      <ConfiguratorCheckout />
    </Layout>
  )
}

export default Configurator
