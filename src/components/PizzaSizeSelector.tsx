import React from "react"
import styled from "styled-components"
const PizzaSizeSelector = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <p className="component-title">Pizza! Pizza! size</p>
        <div className="size-selector-wrapper">
          <div className="size-selector">
            <div className="s-size">S</div>
            <div className="m-size">M</div>
            <div className="l-size">L</div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .size-selector-wrapper {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .size-selector {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 27rem;
    height: 5.5rem;
    border-radius: 5rem;
    background-color: #ececf3;
    div {
      background-color: #ececf3;
      color: #8c8c8c;
      font-family: Inter;
    }
  }
`
export default PizzaSizeSelector
