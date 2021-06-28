import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Error = () => {
  return (
    <Wrapper>
      <h1>Ups, upali ste u slijepu ulicu</h1>
      <Link to="/" className="btn">
        Vrati me nazad!
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
`
export default Error
