import React from "react"
import "../css/layout.css"
import styled from "styled-components"
import { HomeComponent } from "../components"
export default function Home() {
  return (
    <Wrapper>
      <HomeComponent />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  background-color: #fafafa;
  h1 {
    font-family: Avenir;
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    color: #383838;
  }
`
