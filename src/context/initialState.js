import { fetchCart } from "../utils/fetchLocalStorageData";

const cartInfo = fetchCart();

export const initialState = {
  user: null,
  foodItems: null,
  cartShow: null,
  cartItems: cartInfo,
};
