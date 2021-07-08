import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"

const OrderModal = ({ currentOrder }) => {
  return (
    <Wrapper>
      <div className="order-modal">
        <p className="component-title">Almost done!</p>
        <div className="order-modal-content">
          <div className="order-details">
            <p className="component-title subtitle">Order Details</p>
            <p className="mini-title">Toppings</p>
            <p className="basic-text">Cheese, Sausage, Pineapple</p>
            <p className="basic-text">QTY:2</p>
            <div className="horizontal-line"></div>
            <p className="delivery">Delivery</p>
            <p className="delivery-info">
              Free delivery within 1 hour or you don't have to pay.
            </p>
            <div className="horizontal-line"></div>
            {/* I know I should be using discount component here, but i overcomplicated it */}
            <div className="discount-component"></div>
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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .basic-text {
    margin-top: -1rem;
  }
  .delivery {
    color: #979797;
    font-size: 0.85rem;
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
    font-size: 2.1rem;
    font-weight: bold;
    color: #b95de4 !important;
  }
  .total-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    padding-left: 2rem;
    padding-right: 2rem;
    position: relative;
    height: 25rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .shipping-information {
  }
`
export default connect(mapStateToProps)(OrderModal)
