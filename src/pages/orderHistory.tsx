import React from "react"
import { Navbar } from "../components"
import styled from "styled-components"
import { OrderHistoryComponent } from "../components"
const orderHistory = () => {
  return (
    <Wrapper>
      <Navbar />
      <OrderHistoryComponent />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
`
export default orderHistory
