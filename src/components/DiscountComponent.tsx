import React, { useState } from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import {
  setDiscount,
  setOrderPrice,
} from "../modules/configurator/redux/current_order/actions"
import { discountCodes } from "../constants/discountCodes"

const DiscountComponent = ({
  setDiscount,
  smallerSizeDiscount,
  currentOrder,
  setOrderPrice,
}: {
  setDiscount: any
  smallerSizeDiscount?: boolean
  currentOrder: any
  setOrderPrice: any
}) => {
  const [discountCode, setDiscountCode] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const discountSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (discountCodes.find(code => code === discountCode)) {
      setMessage("You have entered a valid code")
      setDiscount(true)
      setOrderPrice(currentOrder.orderPrice - currentOrder.orderPrice * 0.1)
    } else {
      setMessage("Code you have entered is not valid")
      setDiscount(false)
    }
  }
  return (
    <Wrapper>
      <div className="section-center">
        {!smallerSizeDiscount ? (
          <p className="component-title">Get the discount</p>
        ) : (
          ""
        )}
        <div className="box-wrapper">
          <form onSubmit={discountSubmit}>
            <input
              type="text"
              value={discountCode}
              onChange={e => setDiscountCode(e.target.value)}
              placeholder="Enter discount code"
            />
            <button className="apply-code-btn">Apply</button>
          </form>
        </div>
        <p className="message">{message}</p>
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
    setDiscount: (discount: boolean) => dispatch(setDiscount(discount)),
    setOrderPrice: (price: number) => dispatch(setOrderPrice(price)),
  }
}

const Wrapper = styled.div`
  margin-top: 3rem;
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
    cursor: pointer;
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
export default connect(mapStateToProps, mapDispatchToProps)(DiscountComponent)
