import React from "react"
import { Navbar, OrderCompleted } from "../components"
import styled from "styled-components"
const orderSuccessful = () => {
  return (
    <Wrapper>
      <Navbar />
      <OrderCompleted />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
`

export default orderSuccessful
