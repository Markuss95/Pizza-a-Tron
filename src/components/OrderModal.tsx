import React, { useState } from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { discountCodes } from "../constants/discountCodes"
import {
  setDiscount,
  setOrderPrice,
} from "../modules/configurator/redux/current_order/actions"

const OrderModal = ({ currentOrder, setDiscount, setOrderPrice }) => {
  const [discountCode, setDiscountCode] = useState<
    string | number | readonly string[]
  >("")
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
      <div className="order-modal">
        <p className="component-title">Almost done!</p>
        <div className="order-modal-content">
          <div className="order-details">
            <p className="component-title subtitle">Order Details</p>
            <p className="mini-title">Toppings</p>
            <p className="basic-text">
              {currentOrder.toppings.map((topping: string, index: number) => {
                if (index < currentOrder.toppings.length - 1) {
                  return `${topping}, `
                } else {
                  return `${topping}`
                }
              })}
            </p>
            <p className="basic-text">QTY: {currentOrder.quantity}</p>
            <div className="horizontal-line"></div>
            <p className="delivery">Delivery</p>
            <p className="delivery-info">
              Free delivery within 1 hour or you don't have to pay.
            </p>
            <div className="horizontal-line"></div>
            <div className="box-wrapper">
              <form onSubmit={discountSubmit}>
                <input
                  type="text"
                  value={discountCode}
                  onChange={e => setDiscountCode(e.target.value)}
                  placeholder="Discount code"
                />
                <button className="apply-code-btn">Apply</button>
              </form>
            </div>
            <p className="message">{message}</p>
            <div className="total-price">
              <p className="price">Total price</p>
              <p className="total-amount">
                $
                {currentOrder.orderPrice.toLocaleString("en", {
                  useGrouping: false,
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
          <div className="shipping-information"></div>
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
    setDiscount: (discount: boolean) => dispatch(setDiscount(discount)),
    setOrderPrice: (price: number) => dispatch(setOrderPrice(price)),
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .apply-code-btn {
    cursor: pointer;
    display: flex;
    justify-content: center;
    color: #383838;
    align-items: center;
    border: 1px solid #dbdbdb;
    background-color: transparent;
    margin-right: 0.7rem;
    height: 2.4rem;
    width: 5rem;
    border-radius: 5rem;
  }
  .basic-text {
    margin-top: -1rem;
    text-transform: capitalize;
    line-height: 1.8rem;
  }
  .delivery {
    margin-bottom: 0.5rem;
    color: #979797;
    font-size: 0.85rem;
  }
  form {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    width: 18.5rem;
    height: 3.2rem;
    border-radius: 5rem;
    background-color: #ececf3;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
    input {
      height: 2rem;
      margin-left: 2.3rem;
      font-size: 0.85rem;
      background-color: transparent;
      border: none;
      color: #8c8c8c;
    }
    input:focus {
      outline: none;
    }
  }
  .delivery-info {
    color: #979797;
    font-size: 0.75rem;
    margin-top: -1.2rem;
  }
  .discount-component {
    width: 19.5rem;
    height: 3.2rem;
    background: #ececf3;
    border-radius: 4.5rem;
  }

  .order-details {
    display: grid;
    grid-template-columns: 1fr;
    align-items: start;
    padding-bottom: 4rem;
  }
  .mini-title {
    font-style: normal;
    font-weight: normal;
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    color: #8c8c8c;
  }
  .horizontal-line {
    width: 19rem;
    height: 0;
    border: 1px dashed #dbdbdb;
  }
  .subtitle {
    margin-top: 0rem;
    margin-bottom: -0.8rem;
    text-align: left;
    font-size: 1.3rem;
    font-weight: 600;
  }
  .total-amount {
    font-size: 1.8rem;
    font-weight: bold;
    color: #b95de4 !important;
  }
  .total-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .toppings {
    white-space: nowrap;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
  }
  .price {
    color: #979797;
    font-size: 0.85rem;
    font-weight: 800;
  }
  .order-modal {
    margin-top: 7rem;
    width: 44.275rem;
    height: 31.5rem;
    background-color: white;
    border: 1px solid #f7f7f7;
    box-sizing: border-box;
    box-shadow: 0px 20px 28px rgba(0, 0, 0, 0.03);
    border-radius: 1.6rem;
  }
  .order-modal-content {
    padding-left: 2.2rem;
    padding-right: 2.2rem;
    position: relative;
    height: 25rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .shipping-information {
  }
`
export default connect(mapStateToProps, mapDispatchToProps)(OrderModal)
