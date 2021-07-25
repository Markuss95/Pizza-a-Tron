import { firebase, googleAuthProvider } from "../../../firebase/firebase"
import { navigate } from "@reach/router"

export const login = (id: string) => ({
  type: "LOGIN",
  id,
})
export const logout = () => ({
  type: "LOGOUT",
})
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
