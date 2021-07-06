export const setToppingsPrice = (price: number) => ({
  type: "SET_TOPPINGS_PRICE",
  price,
})

export const setSizePrice = (price: number) => ({
  type: "SET_SIZE_PRICE",
  price,
})

export const setDiscount = (discount: boolean) => ({
  type: "SET_DISCOUNT",
  discount,
})
