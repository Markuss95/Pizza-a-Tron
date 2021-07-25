interface authState {
  id?: string
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
    default:
      return state
  }
}
