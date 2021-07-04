import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import Topping from "./Topping"
import { setToppingsPrice } from "../modules/configurator/redux/current_order/actions"
const Toppings = ({ setToppingsPrice }) => {
  const [toppings, setToppings] = useState<string[]>([])
  let toppingsPrice: number = 0
  let chilli: string,
    corn: string,
    egg: string,
    pineapple: string,
    meat: string,
    shrooms: string,
    bacon: string
  chilli = corn = egg = pineapple = meat = shrooms = bacon = ""

  const updateToppings = (topping: string) => {
    if (!toppings.find(item => item === topping)) {
      setToppings(toppings => [...toppings, topping])
    } else {
      let filteredArray = toppings.filter(item => item !== topping)
      setToppings(filteredArray)
    }
  }

  toppings.forEach(item => {
    if (item === "meat" || item === "bacon") {
      toppingsPrice = toppingsPrice + 5
    } else {
      toppingsPrice += 3
    }
  })
  useEffect(() => {
    setToppingsPrice(toppingsPrice)
  }, [toppings])

  if (toppings.find(topping => topping === "corn")) {
    corn = "active"
  }
  if (toppings.find(topping => topping === "egg")) {
    egg = "active"
  }
  if (toppings.find(topping => topping === "pineapple")) {
    pineapple = "active"
  }
  if (toppings.find(topping => topping === "meat")) {
    meat = "active"
  }
  if (toppings.find(topping => topping === "shrooms")) {
    shrooms = "active"
  }
  if (toppings.find(topping => topping === "bacon")) {
    bacon = "active"
  }
  if (toppings.find(topping => topping === "chilli pepper")) {
    chilli = "active"
  }

  return (
    <Wrapper>
      <div className="section-center">
        <p className="component-title">Toppings! Toppings!</p>
        <div className="content-center">
          <Topping
            topping={"chilli peper"}
            updateToppings={updateToppings}
            chilli={chilli}
          />
          <Topping
            topping={"corn"}
            updateToppings={updateToppings}
            corn={corn}
          />
          <Topping topping={"egg"} updateToppings={updateToppings} egg={egg} />
          <Topping
            topping={"pineapple"}
            updateToppings={updateToppings}
            pineapple={pineapple}
          />
          <Topping
            topping={"meat"}
            updateToppings={updateToppings}
            meat={meat}
          />
          <Topping
            topping={"shrooms"}
            updateToppings={updateToppings}
            shrooms={shrooms}
          />
          <Topping
            topping={"bacon"}
            updateToppings={updateToppings}
            bacon={bacon}
          />
        </div>
        <p className="topping-price">Total price +${toppingsPrice} </p>
      </div>
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setToppingsPrice: (number: number) => dispatch(setToppingsPrice(number)),
  }
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

export default connect(null, mapDispatchToProps)(Toppings)
