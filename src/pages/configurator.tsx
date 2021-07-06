import React from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"

import {
  Toppings,
  PizzaSizeSelector,
  DiscountComponent,
  ConfiguratorCheckout,
} from "../components"
const Configurator = () => {
  return (
    <Wrapper>
      <Navbar />
      <Toppings />
      <PizzaSizeSelector />
      <DiscountComponent />
      <ConfiguratorCheckout />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
`
export default Configurator
