interface orderState {
  toppings: string[]
  toppingsPrice: number
  pizzaSizePrice: number
  quantity: number
  orderPrice: number
  discount: boolean
}

export const setOrders = (order: orderState) => ({
  type: "SET_ORDERS",
  order,
})
