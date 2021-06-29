import React from "react"
import styled from "styled-components"
import Topping from "./Topping"
const Toppings = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <p className="component-title">Toppings! Toppings!</p>
        <div className="content-center">
          <Topping topping={"chilli peper"} />
          <Topping topping={"corn"} />
          <Topping topping={"egg"} />
          <Topping topping={"pineapple"} />
          <Topping topping={"meat"} />
          <Topping topping={"shrooms"} />
          <Topping topping={"bacon"} />
        </div>
        <p className="topping-price">Total price +$3.00</p>
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
  .topping-price {
    margin-top: 1rem;
    font-size: 1rem;
    text-align: center;
  }
`

export default Toppings
