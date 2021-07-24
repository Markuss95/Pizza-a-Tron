import { firebase, googleAuthProvider } from "../../../firebase/firebase"
import { navigate } from "@reach/router"
export const startLogin = () => {
  return () => {
    return firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(() => {
        navigate("/app/configurator")
      })
  }
}

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut()
  }
}
