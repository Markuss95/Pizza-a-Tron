import React, { useEffect } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { setStateDefault } from "../modules/configurator/redux/current_order/actions"

const OrderCompleted = ({ setStateDefault }) => {
  useEffect(() => {
    setStateDefault()
  }, [])
  return (
    <Wrapper>
      <div className="section-center content-center">
        <div>
          <StaticImage
            src="../assets/images/pizzaslice.png"
            alt="pizza"
            width={147.88}
            height={171.03}
          />
        </div>
        <div className="content-description">
          <h1>
            Your Pizza! Pizza!
            <br /> is on its way!
          </h1>
          <p>You should be enjoying your meal in no more than 45 minutes.</p>
          <div className="button-group">
            <Link to="/configurator">
              <button className="btn buy-btn">Buy another</button>
            </Link>
            <Link to="/app/orderHistory">
              <button className="btn order-history-btn">Order history</button>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setStateDefault: () => dispatch(setStateDefault()),
  }
}
const Wrapper = styled.div`
  .button-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  p {
    text-align: left;
    padding-top: 1rem;
    font-weight: 800;
    font-size: 1.2rem;
    line-height: 28px;
    color: #8c8c8c;
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 2rem;
    margin-top: 15rem;
  }
  .content-description {
    display: flex;
    flex-direction: column;
    h1 {
      text-align: left;
      line-height: 3.3rem;
      color: #383838;
      font-weight: 800;
      font-size: 3rem;
    }
  }
  .buy-btn {
    display: flex;
    flex-direction: column;
    color: #fff;
    justify-content: center;
    background-color: #b95de4;
    border-radius: 48px;
    align-items: center;
    width: 193px;
    height: 68px;
    padding: 16px 48px;
    margin-top: 1.5rem;
  }
  .order-history-btn {
    display: flex;
    flex-direction: column;
    color: #fff;
    justify-content: center;
    background-color: #b992e2;
    border-radius: 48px;
    align-items: center;
    width: 193px;
    height: 68px;
    padding: 16px 48px;
    margin-top: 1.5rem;
    transition: var(--transition);
  }
  .order-history-btn:hover {
    background-color: #b95de4;
  }
`

export default connect(null, mapDispatchToProps)(OrderCompleted)
