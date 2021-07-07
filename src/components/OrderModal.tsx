import React from "react"
import styled from "styled-components"

const OrderModal = () => {
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
            <p>Delivery</p>
            <p>Free delivery within 1 hour or you don't have to pay.</p>
            <div className="horizontal-line"></div>
            {/* I know I should be using discount component here, but i overcomplicated it */}
            <div className="discount-component"></div>
            <div className="total-price">
              <p>Total price</p>
              <p>$22.50</p>
            </div>
          </div>
          <div className="shipping-information"></div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .basic-text {
    position: relative;
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

  .discount-component {
    width: 19.5rem;
    height: 3.2rem;
    background: #ececf3;
    border-radius: 4.5rem;
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
    position: relative;
    height: 25rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .order-details {
    padding-left: 2.2rem;
    display: grid;
    grid-template-columns: 1fr;

    align-items: start;
  }
  .shipping-information {
    padding-right: 2.2rem;
  }
  .subtitle {
    text-align: left;
    font-size: 1.3rem;
    font-weight: 600;
  }
  .horizontal-line {
    width: 22.625rem;
    height: 0;
    border: 1px dashed #dbdbdb;
  }
  .total-price {
    display: flex;
    justify-content: space-between;
  }
`
export default OrderModal
