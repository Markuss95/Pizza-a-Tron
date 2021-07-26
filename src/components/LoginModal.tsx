import React, { useState } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import Modal from "react-modal"
import { startLoginWithGoogle } from "../modules/configurator/redux/authentication/actions"
import { Google } from "../constants/icons"
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
}: {
  isLoginWindowOpen: boolean
  updateIsLoginWindowOpen: () => void
  startLoginWithGoogle: any
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
            // ref={_googleBar => (googleBar = _googleBar)}
            className="google-bar"
          >
            <Google />
            <p>Continue with Google</p>
          </Link>
        </div>
        <div></div>
        <form></form>
      </Wrapper>
    </Modal>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
  }
}
const Wrapper = styled.div`
  .google-bar {
    display: flex;
    justify-content: space-between;
    p {
      margin-left: 1rem;
      color: #383838;
    }
  }
`

export default connect(null, mapDispatchToProps)(LoginModal)
