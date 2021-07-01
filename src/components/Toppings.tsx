import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Topping from "./Topping"
const Toppings = () => {
  const [toppings, setToppings] = useState<string[]>([])
  const updateToppings = (topping: string) => {
    setToppings(toppings => [...toppings, topping])
  }
  console.log(toppings)
  return (
    <Wrapper>
      <div className="section-center">
        <p className="component-title">Toppings! Toppings!</p>
        <div className="content-center">
          <Topping topping={"chilli peper"} updateToppings={updateToppings} />
          <Topping topping={"corn"} updateToppings={updateToppings} />
          <Topping topping={"egg"} updateToppings={updateToppings} />
          <Topping topping={"pineapple"} updateToppings={updateToppings} />
          <Topping topping={"meat"} updateToppings={updateToppings} />
          <Topping topping={"shrooms"} updateToppings={updateToppings} />
          <Topping topping={"bacon"} updateToppings={updateToppings} />
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
