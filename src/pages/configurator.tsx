import React from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import { connect } from "react-redux"
import {
  Toppings,
  PizzaSizeSelector,
  DiscountComponent,
  ConfiguratorCheckout,
} from "../components"
const Configurator = props => {
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
const mapStateToProps = state => {
  console.log(state)
  return {
    currentOrder: state.currentOrder,
  }
}

const Wrapper = styled.div`
  height: 100vh;
`
export default connect(mapStateToProps)(Configurator)
