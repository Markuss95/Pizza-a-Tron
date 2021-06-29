import React, { useState } from "react"
import styled from "styled-components"
const DiscountComponent = () => {
  const [discountCode, setDiscountCode] = useState<
    string | number | readonly string[]
  >("")
  return (
    <Wrapper>
      <div className="section-center">
        <p className="component-title">Get the discount</p>
        <div className="box-wrapper">
          <form>
            <input
              type="text"
              value={discountCode}
              onChange={e => setDiscountCode(e.target.value)}
              placeholder="Enter discount code"
            />
            <button className="apply-code-btn">Apply</button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    width: 24rem;
    height: 4.3rem;
    border-radius: 5rem;
    background-color: #ececf3;
    input {
      height: 2rem;
      margin-left: 2.3rem;
      font-size: 1rem;
      background-color: transparent;
      border: none;
      color: #8c8c8c;
    }
    input:focus {
      outline: none;
    }
  }

  .apply-code-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    background-color: transparent;
    margin-right: 0.5rem;
    height: 3.4rem;
    width: 7rem;
    border-radius: 5rem;
  }
`
export default DiscountComponent
