export interface orderState {
  toppings: string[]
  toppingsPrice: number
  pizzaSizePrice: number
  quantity: number
  orderPrice: number
  discount: boolean
  date: string
  address?: {
    streetAndNumber: string
    city: string
    postalCode: number
    country: string
  }
}

export const setOrders = (order: orderState) => ({
  type: "SET_ORDERS",
  order,
})
