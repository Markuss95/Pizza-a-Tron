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

const Topping = ({
  topping,
  updateToppings,
  chilli,
  corn,
  egg,
  pineapple,
  meat,
  shrooms,
  bacon,
}: {
  topping: string
  updateToppings: (topping: string) => void
  chilli?: string
  corn?: string
  egg?: string
  pineapple?: string
  meat?: string
  shrooms?: string
  bacon?: string
}) => {
  switch (topping) {
    case "chilli peper":
      return (
        <Wrapper>
          <div
            className={`${
              chilli === "active"
                ? "topping-background first-topping-background active"
                : "topping-background first-topping-background"
            } `}
            onClick={() => updateToppings("chilli pepper")}
          >
            <div className="topping-background-circle">
              {" "}
              <div className="icon">
                <ChilliPepper />
              </div>
            </div>
            <p className="topping-name">Chilli</p>
          </div>
        </Wrapper>
      )
      break
    case "corn":
      return (
        <Wrapper>
          <div
            className={`${
              corn === "active"
                ? "topping-background  active"
                : "topping-background "
            } `}
            onClick={() => updateToppings("corn")}
          >
            <div className="topping-background-circle">
              {" "}
              <Corn />
            </div>
            <p className="topping-name">Corn</p>
          </div>
        </Wrapper>
      )
    case "egg":
      return (
        <Wrapper>
          <div
            className={`${
              egg === "active"
                ? "topping-background  active"
                : "topping-background "
            } `}
            onClick={() => updateToppings("egg")}
          >
            <div className="topping-background-circle">
              {" "}
              <Egg />
            </div>
            <p className="topping-name">Egg</p>
          </div>
        </Wrapper>
      )
    case "pineapple":
      return (
        <Wrapper>
          <div
            className={`${
              pineapple === "active"
                ? "topping-background  active"
                : "topping-background "
            } `}
            onClick={() => updateToppings("pineapple")}
          >
            <div className="topping-background-circle">
              {" "}
              <Pineapple />
            </div>
            <p className="topping-name">Pineapple</p>
          </div>
        </Wrapper>
      )
    case "meat":
      return (
        <Wrapper>
          <div
            className={`${
              meat === "active"
                ? "topping-background  active"
                : "topping-background "
            } `}
            onClick={() => updateToppings("meat")}
          >
            <div className="topping-background-circle">
              {" "}
              <Meat />
            </div>
            <p className="topping-name">Meat</p>
          </div>
        </Wrapper>
      )
    case "shrooms":
      return (
        <Wrapper>
          <div
            className={`${
              shrooms === "active"
                ? "topping-background  active"
                : "topping-background "
            } `}
            onClick={() => updateToppings("shrooms")}
          >
            <div className="topping-background-circle">
              {" "}
              <Shrooms />
            </div>
            <p className="topping-name">Shrooms</p>
          </div>
        </Wrapper>
      )
    case "bacon":
      return (
        <Wrapper>
          <div
            className={`${
              bacon === "active"
                ? "topping-background  active"
                : "topping-background "
            } `}
            onClick={() => updateToppings("bacon")}
          >
            <div className="topping-background-circle">
              {" "}
              <Bacon />
            </div>
            <p className="topping-name">Bacon</p>
          </div>
        </Wrapper>
      )
  }
}

const Wrapper = styled.div`
  .topping-background {
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    margin-left: 1rem;
    width: 5.3rem;
    height: 8rem;
    border: 1px solid #f2f2f2;
    box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.03);
    border-radius: 5rem;
    background-color: #fff;
  }

  .topping-background:hover {
    background-color: #e5c3f5;
  }
  .topping-background:hover > .topping-background-circle {
    background-color: #edd5f8;
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
    margin-top: 0.4rem;
    height: 3.8rem;
    width: 3.8rem;
    background-color: white;
    border-radius: 50%;
  }
  .topping-name {
    position: absolute;
    top: 4.6rem;
    font-weight: 800;
  }
  .active {
    background-color: #e5c3f5;
    div {
      background-color: #edd5f8;
    }
  }
`
export default Topping
