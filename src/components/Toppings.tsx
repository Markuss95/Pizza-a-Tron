import React from "react"
import styled from "styled-components"
import {
  ChilliPepper,
  Corn,
  Egg,
  Pineapple,
  Meat,
  Shrooms,
  Bacon,
} from "../constants/icons"
const Toppings = () => {
  return (
    <Wrapper>
      <div className="section-center ">
        <p className="configurator-openning-message">Toppings! Toppings!</p>
        <div className="content-center">
          <div className="topping-background first-topping-background">
            <div className="topping-background-circle">
              {" "}
              <ChilliPepper />
            </div>
          </div>
          <div className="topping-background">
            {" "}
            <div className="topping-background-circle">
              <Corn />
            </div>
          </div>
          <div className="topping-background">
            {" "}
            <div className="topping-background-circle">
              <Egg />
            </div>
          </div>
          <div className="topping-background">
            {" "}
            <div className="topping-background-circle">
              <Pineapple />
            </div>
          </div>
          <div className="topping-background">
            {" "}
            <div className="topping-background-circle">
              <Meat />
            </div>
          </div>
          <div className="topping-background">
            {" "}
            <div className="topping-background-circle">
              <Shrooms />
            </div>
          </div>
          <div className="topping-background">
            {" "}
            <div className="topping-background-circle">
              <Bacon />
            </div>
          </div>
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
  .topping-background {
    position: relative;
    display: flex;
    justify-content: center;
    margin-left: 1rem;
    width: 7rem;
    height: 7.5rem;
    border-radius: 5rem;
    background-color: #fff;
  }
  .first-topping-background {
    margin-left: 0;
  }
  .topping-background-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

    height: 4rem;
    width: 4rem;
    background-color: white;
    border-radius: 50%;
  }
`

export default Toppings
