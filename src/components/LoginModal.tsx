import React, { useState } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import Modal from "react-modal"
import {
  startLoginWithGoogle,
  startLoginWithFacebook,
} from "../modules/configurator/redux/authentication/actions"
import { Google, Facebook } from "../constants/icons"
import styled from "styled-components"
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}
Modal.setAppElement("body")

const LoginModal = ({
  isLoginWindowOpen,
  updateIsLoginWindowOpen,
  startLoginWithGoogle,
  startLoginWithFacebook,
}: {
  isLoginWindowOpen: boolean
  updateIsLoginWindowOpen: () => void
  startLoginWithGoogle: any
  startLoginWithFacebook: any
}) => {
  let googleBar
  const closeModal = () => {
    updateIsLoginWindowOpen()
  }
  const afterOpenModal = () => {}

  return (
    <Modal
      isOpen={isLoginWindowOpen}
      onRequestClose={closeModal}
      onAfterOpen={afterOpenModal}
      contentLabel="Login options"
      style={customStyles}
    >
      <Wrapper>
        <div>
          <Link
            to="/app/configurator"
            onClick={startLoginWithGoogle}
            className="google-bar"
          >
            <Google />
            <p>Continue with Google</p>
          </Link>
        </div>
        <div>
          <Link
            to="/app/configurator"
            onClick={startLoginWithFacebook}
            className="facebook-bar"
          >
            <Facebook />
            <p>Continue with Facebook</p>
          </Link>
        </div>
        <form></form>
      </Wrapper>
    </Modal>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
    startLoginWithFacebook: () => dispatch(startLoginWithFacebook()),
  }
}
const Wrapper = styled.div`
  position: relative;
  font-size: 1.5rem;
  .google-bar {
    position: relative;
    display: flex;
    justify-content: space-between;
    p {
      text-align: left;
      margin-right: 1.5rem;
      color: #383838;
    }
  }
  .facebook-bar {
    display: flex;
    position: relative;
    justify-content: space-between;
    margin-top: 1rem;
    p {
      margin-left: 1rem;
      color: #383838;
    }
  }
`

export default connect(null, mapDispatchToProps)(LoginModal)
