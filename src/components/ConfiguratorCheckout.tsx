import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
const ConfiguratorCheckout = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="pizza-img-wrapper">
          <StaticImage
            src="../assets/images/pizzaslice.png"
            alt="pizza"
            width={147.88}
            height={171.03}
            placeholder="none"
            className="pizza-slice-img"
            imgStyle={{ backgroundColor: "transparent" }}
          />
        </div>
        <form className="pizza-quantity-wrapper">
          <input type="number" placeholder="1" min="1" />
          <p className="qty">QTY</p>
          <div className="line-seperator"></div>
          <p className="total-amount">$22.50</p>
          <p className="order-total">ORDER TOTAL</p>
          <button className="buy-pizza-btn" type="submit">
            {" "}
            Buy Pizza! Pizza!
          </button>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .section-center {
    display: block;
    position: absolute;
    bottom: 0%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    height: 8.3rem;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #f2f2f2;
    box-sizing: border-box;
    border-radius: 28px 28px 0px 0px;
  }
  .pizza-slice-img {
    position: absolute;
    left: 2rem;
    bottom: 1.1rem;
  }
  .pizza-quantity-wrapper {
    position: relative;
    width: 13rem;
    top: 2.7rem;
    left: 14rem;
    input {
      text-align: center;
      padding-left: 0.8rem;
      background: #ececf3;
      border-radius: 20px;
      border: none;
      width: 3.7rem;
      height: 2.2rem;
    }
    input::placeholder {
      color: #383838;
    }
    input:focus {
      color: #383838;
    }
  }
  .qty {
    color: #b9b9b9;
    padding-left: 0.9rem;
    margin-top: 0.1rem;
  }

  .line-seperator {
    position: absolute;
    height: 52px;
    border: 1px dashed #dbdbdb;
    margin-left: 5.4rem;
    margin-top: -3.5rem;
  }
  .total-amount {
    position: absolute;
    margin-left: 7rem;
    margin-top: -3.8rem !important;
    font-size: 2.1rem;
    font-weight: bold;
    color: #b95de4 !important;
  }
  .order-total {
    color: #b9b9b9;
    margin-left: 7rem;
    margin-top: -1.25rem;
  }
  .buy-pizza-btn {
    position: absolute;
    padding: 16px 24px;
    background: #b95de4;
    border-radius: 48px;
    border: none;
    margin-left: 17rem;
    margin-top: -3.5rem;
    color: white;
  }
`

export default ConfiguratorCheckout