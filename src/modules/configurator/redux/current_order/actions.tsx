export const setToppingsPrice = (price: number) => ({
  type: "SET_TOPPINGS_PRICE",
  price,
})

export const setSize = (size: string) => ({
  type: "SET_SIZE",
  size,
})

export const setSizePrice = (price: number) => ({
  type: "SET_SIZE_PRICE",
  price,
})

export const setDiscount = (discount: boolean) => ({
  type: "SET_DISCOUNT",
  discount,
})

export const setQuantity = (quantity: number) => ({
  type: "SET_QUANTITY",
  quantity,
})

export const setToppings = (toppings: string[]) => ({
  type: "SET_TOPPINGS",
  toppings,
})

export const setOrderPrice = (price: number) => ({
  type: "SET_ORDER_PRICE",
  price,
})

export const setStateDefault = () => ({
  type: "SET_STATE_DEFAULT",
})
