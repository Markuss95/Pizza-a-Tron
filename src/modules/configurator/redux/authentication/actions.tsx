import {
  firebase,
  googleAuthProvider,
  facebookAuthProvder,
} from "../../../firebase/firebase"
import { navigate } from "@reach/router"

export const success = () => ({
  type: "SUCCESS",
})

export const fail = () => ({
  type: "FAIL",
})

export const loginFail = () => ({
  type: "LOGIN_FAIL",
})

export const startLoginWithGoogle = () => {
  return () => {
    return firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(() => {
        navigate("/app/configurator")
      })
  }
}
export const startLoginWithFacebook = () => {
  return () => {
    return firebase
      .auth()
      .signInWithPopup(facebookAuthProvder)
      .then(() => {
        navigate("/app/configurator")
      })
  }
}
export const startLoginWithEmail = (email: string, password: string) => {
  return dispatch => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate("/app/configurator")
      })
      .catch(() => {
        dispatch(loginFail())
      })
  }
}

export const startCreateUserWithEmail = (email: string, password: string) => {
  return dispatch => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(success())
      })
      .catch(() => {
        dispatch(fail())
      })
  }
}
export const startLogout = () => {
  return () => {
    return firebase.auth().signOut()
  }
}
