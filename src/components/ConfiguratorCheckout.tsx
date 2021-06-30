import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
const ConfiguratorCheckout = () => {
  return (
    <Wrapper>
      <div className="section-center">
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .section-center {
    position: absolute;
    bottom: 0%;
    left: 24vw;
    right: 24vw;
    height: 8.3rem;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #f2f2f2;
    box-sizing: border-box;
    border-radius: 28px 28px 0px 0px;
  }
  .pizza-slice-img {
    position: absolute;
    left: 2rem;
    bottom: 1.2rem;
    img {
      background-color: transparent !important;
    }
  }
`

export default ConfiguratorCheckout
