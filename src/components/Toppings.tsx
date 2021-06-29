import React from "react"
import styled from "styled-components"
import Topping from "./Topping"
const Toppings = () => {
  return (
    <Wrapper>
      <div className="section-center ">
        <p className="configurator-openning-message">Toppings! Toppings!</p>
        <div className="content-center">
          <Topping topping={"chilli peper"} />
          <Topping topping={"corn"} />
          <Topping topping={"egg"} />
          <Topping topping={"pineapple"} />
          <Topping topping={"meat"} />
          <Topping topping={"shrooms"} />
          <Topping topping={"bacon"} />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .content-center {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }
`

export default Toppings
