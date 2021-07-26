import React, { useState } from "react"
import Modal from "react-modal"
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
}: {
  isLoginWindowOpen: boolean
  updateIsLoginWindowOpen: () => void
}) => {
  const closeModal = () => {
    updateIsLoginWindowOpen()
  }

  return (
    <Modal
      isOpen={isLoginWindowOpen}
      onRequestClose={closeModal}
      contentLabel="Login options"
      style={customStyles}
    >
      <h3>Login to your account</h3>
      <h2>And say hello</h2>
    </Modal>
  )
}

export default LoginModal
