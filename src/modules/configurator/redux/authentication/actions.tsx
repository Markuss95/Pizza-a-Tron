import {
  firebase,
  googleAuthProvider,
  facebookAuthProvder,
} from "../../../firebase/firebase"
import { navigate } from "@reach/router"

export const login = (id: string) => ({
  type: "LOGIN",
  id,
})
export const logout = () => ({
  type: "LOGOUT",
})
export const loginSuccess = () => ({
  type: "LOGIN_SUCCESS",
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

export const startCreateUserWithEmail = (email: string, password: string) => {
  return () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {})
      .catch(error => {
        console.log(error)
      })
  }
}
export const startLogout = () => {
  return () => {
    return firebase.auth().signOut()
  }
}
