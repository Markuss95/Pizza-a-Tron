import React, { useState } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import Modal from "react-modal"
import {
  startLoginWithGoogle,
  startLoginWithFacebook,
  startLoginWithEmail,
} from "../modules/configurator/redux/authentication/actions"
import { Google, Facebook } from "../constants/icons"
import styled from "styled-components"
interface authState {
  id?: string
  accountCreation?: string
  fail?: string
  loginFail?: string
}

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
  startLoginWithEmail,
  authUser,
}: {
  isLoginWindowOpen: boolean
  updateIsLoginWindowOpen: () => void
  startLoginWithGoogle: any
  startLoginWithFacebook: any
  startLoginWithEmail: any
  authUser: authState
}) => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const closeModal = () => {
    updateIsLoginWindowOpen()
  }
  const loginWithMail = (e: React.FormEvent) => {
    e.preventDefault()
    startLoginWithEmail(email, password)
  }

  return (
    <Modal
      isOpen={isLoginWindowOpen}
      onRequestClose={closeModal}
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

        <form className="registration-form" onSubmit={loginWithMail}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <p className="error">
            {authUser.loginFail ? authUser.loginFail : ""}
          </p>

          {authUser.accountCreation === "Your account is created!" ? (
            <Link to="/app/configurator">
              <button className="finish-login-btn buy-pizza-btn">
                Buy Pizza
              </button>
            </Link>
          ) : (
            <button className="finish-login-btn" type="submit">
              Login
            </button>
          )}
        </form>
      </Wrapper>
    </Modal>
  )
}
const mapStateToProps = state => {
  return {
    authUser: state.auth,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
    startLoginWithFacebook: () => dispatch(startLoginWithFacebook()),
    startLoginWithEmail: (email: string, password: string) =>
      dispatch(startLoginWithEmail(email, password)),
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
    margin-bottom: 2rem;
    p {
      margin-left: 1rem;
      color: #383838;
    }
  }
  .google-bar {
    margin-top: 1rem;
  }
  .error {
    font-size: 1rem;
    color: red;
  }
  .registration-form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    input {
      margin-bottom: 1rem;
      margin-top: 0.5rem;
      font-size: 0.85rem;
      right: 10%;
      padding-left: 1rem;
      height: 3rem;
      width: 100%;
      border-radius: 3.93rem;
      background-color: #ececf3;
      border: none;
      color: #8c8c8c;
    }
  }
  input:focus {
    outline: none;
  }
  .finish-login-btn {
    cursor: pointer;
    margin-top: 1.3rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    color: #fff;
    justify-content: center;
    background: #b992e2;
    border-radius: 48px;
    align-items: center;
    border: none;
    width: 100%;
    height: 3.5rem;
    padding: 16px 48px;
    transition: var(--transition);
  }
  .finish-login-btn:hover {
    background: #b95de4;
  }
  .buy-pizza-btn {
    background: #b95de4;
  }
  .buy-pizza-btn:hover {
    background: red;
  }
  .login-form-title {
    font-size: 1.2rem;
    margin-top: 0rem;
    margin-bottom: 0.3rem;
  }
`

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)
