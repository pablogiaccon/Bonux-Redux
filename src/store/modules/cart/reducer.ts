import { Reducer } from "redux";
import { ICartState } from "./types";

const INITTIAL_STATE: ICartState = {
  items: [],
};

const cart: Reducer<ICartState> = () => {
  return INITTIAL_STATE;
};

export default cart;
