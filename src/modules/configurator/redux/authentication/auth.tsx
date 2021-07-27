interface authState {
  id?: string
}
interface authAction {
  type: string
  id?: string
  success?: boolean
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
    case "LOGIN_SUCCESS":
      return { ...state, success: true }
    default:
      return state
  }
}
