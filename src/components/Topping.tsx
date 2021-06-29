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

const Topping = ({ topping }) => {
  switch (topping) {
    case "chilli peper":
      return (
        <Wrapper>
          <div className="topping-background first-topping-background">
            <div className="topping-background-circle">
              {" "}
              <ChilliPepper />
            </div>
          </div>
        </Wrapper>
      )
      break
    case "corn":
      return (
        <Wrapper>
          <div className="topping-background ">
            <div className="topping-background-circle">
              {" "}
              <Corn />
            </div>
          </div>
        </Wrapper>
      )
    case "egg":
      return (
        <Wrapper>
          <div className="topping-background ">
            <div className="topping-background-circle">
              {" "}
              <Egg />
            </div>
          </div>
        </Wrapper>
      )
    case "pineapple":
      return (
        <Wrapper>
          <div className="topping-background ">
            <div className="topping-background-circle">
              {" "}
              <Pineapple />
            </div>
          </div>
        </Wrapper>
      )
    case "meat":
      return (
        <Wrapper>
          <div className="topping-background ">
            <div className="topping-background-circle">
              {" "}
              <Meat />
            </div>
          </div>
        </Wrapper>
      )
    case "shrooms":
      return (
        <Wrapper>
          <div className="topping-background ">
            <div className="topping-background-circle">
              {" "}
              <Shrooms />
            </div>
          </div>
        </Wrapper>
      )
    case "bacon":
      return (
        <Wrapper>
          <div className="topping-background ">
            <div className="topping-background-circle">
              {" "}
              <Bacon />
            </div>
          </div>
        </Wrapper>
      )
  }
}

const Wrapper = styled.div`
  .topping-background {
    position: relative;
    display: flex;
    justify-content: center;
    margin-left: 1rem;
    width: 7rem;
    border: 1px solid #f2f2f2;
    box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.03);
    height: 7.5rem;
    border-radius: 5rem;
    background-color: #fff;
  }
  .first-topping-background {
    margin-left: 0;
  }
  .topping-background-circle {
    display: flex;
    box-shadow: 0px 12px 28px rgba(0, 0, 0, 0.03);
    justify-content: center;
    align-items: center;
    position: absolute;

    height: 4rem;
    width: 4rem;
    background-color: white;
    border-radius: 50%;
  }
`
export default Topping
