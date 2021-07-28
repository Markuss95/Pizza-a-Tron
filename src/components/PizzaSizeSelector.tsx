import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import {
  setSizePrice,
  setSize,
} from "../modules/configurator/redux/current_order/actions"

const PizzaSizeSelector = ({ setSizePrice, currentOrder, setSizeAction }) => {
  const [size, setSize] = useState<String>(currentOrder.pizzaSize)

  useEffect(() => {
    switch (size) {
      case "S":
        setSizeAction("S")
        setSizePrice(10)
        break
      case "M":
        setSizeAction("M")
        setSizePrice(15)
        break
      case "L":
        setSizeAction("L")
        setSizePrice(20)
    }
  }, [size])
  return (
    <Wrapper>
      <div className="section-center">
        <p className="component-title">Pizza! Pizza! size</p>
        <div className="box-wrapper">
          <div className="box">
            <div
              className={`${size === "S" ? "pizza-size active" : "pizza-size"}`}
              onClick={() => setSize("S")}
            >
              S
            </div>
            <div
              className={`${size === "M" ? "pizza-size active" : "pizza-size"}`}
              onClick={() => setSize("M")}
            >
              M
            </div>
            <div
              className={`${size === "L" ? "pizza-size active" : "pizza-size"}`}
              onClick={() => setSize("L")}
            >
              L
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const mapStateToProps = state => {
  return {
    currentOrder: state.currentOrder,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setSizePrice: (number: number) => dispatch(setSizePrice(number)),
    setSizeAction: (size: string) => dispatch(setSize(size)),
  }
}

const Wrapper = styled.div`
  .active {
    background-color: #fff !important;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  }
  .box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 24rem;
    height: 4.3rem;
    border-radius: 5rem;
    background-color: #ececf3;
    div {
      background-color: #ececf3;
      color: #8c8c8c;
      font-family: Inter;
    }
  }

  .pizza-size {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3.4rem;
    width: 7rem;
    border-radius: 5rem;
  }
  .pizza-size:hover {
    background: #ffffff;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  }
`
export default connect(mapStateToProps, mapDispatchToProps)(PizzaSizeSelector)
