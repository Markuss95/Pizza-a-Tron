import React from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import { Toppings, PizzaSizeSelector, DiscountComponent } from "../components"
const configurator = () => {
  return (
    <Wrapper>
      <Navbar />
      <Toppings />
      <PizzaSizeSelector />
      <DiscountComponent />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
`
export default configurator
