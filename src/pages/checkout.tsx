import React from "react"
import { Navbar, OrderModal } from "../components"
import styled from "styled-components"
const checkout = () => {
  return (
    <Wrapper>
      <Navbar />
      <OrderModal />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
`
export default checkout
