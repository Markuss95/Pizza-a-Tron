import React from "react"
import { Navbar } from "../components"
import styled from "styled-components"
const orderSuccessful = () => {
  return (
    <Wrapper>
      <Navbar />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
`

export default orderSuccessful
