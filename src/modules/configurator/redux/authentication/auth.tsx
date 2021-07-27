interface authState {
  id?: string
  accountCreation?: string
  fail?: string
}
interface authAction {
  type: string
  id?: string
}

const defaultStateValue: authState = {}

export default (state = defaultStateValue, action: authAction) => {
  switch (action.type) {
    case "LOGIN":
      return {
        id: action.id,
      }
    case "LOGOUT":
      return {}
    case "SUCCESS":
      return { ...state, accountCreation: "Your account is created!" }
    case "FAIL":
      return { ...state, accountCreation: "Something went wrong :/" }
    default:
      return state
  }
}
