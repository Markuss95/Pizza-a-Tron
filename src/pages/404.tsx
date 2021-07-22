import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Layout } from "../components"

const Error = () => {
  return (
    <Layout>
      <Wrapper>
        <div className="section-center content-wrapper">
          <h1>One thing is for sure. There is no Pizza here.</h1>
          <div>
            <Link to="/" className="btn return-btn">
              Take me back!
            </Link>
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  .content-wrapper {
    margin-top: 18rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      color: #383838;
      margin-bottom: 1rem;
    }
    div {
      margin-top: 2rem;
    }
  }
  .return-btn {
    color: #fff;
    background-color: #b95de4;
    border-radius: 48px;
    align-items: center;
    width: 186px;
    height: 68px;
    padding: 1.5rem;
  }
`
export default Error
