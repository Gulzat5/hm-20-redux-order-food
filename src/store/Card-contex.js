import { createContext, useEffect, useReducer } from "react";
import { fetchRequest } from "../lib/fetAPI";
export const CardContext = createContext({
  items: [],
  totalAmount: 0,
});
const constans = {
  INCREMENT: "INCREMENT",
  ADD: "ADD",
  decrement: "DECREMENT",
  GETBASKET: "GETBASKET",
};

const cartReducer = (state, action) => {
  if (action.type === constans.ADD) {
    return (state = action.payload);
  }

  if (action.type === constans.GETBASKET) {
    return (state = action.payload);
  }

  if (action.type === constans.INCREMENT) {
    return (state = action.payload);
  }
  if (action.type === constans.decrement) {
    return (state = action.payload);
  }
  return state;
};

export const CardProvaider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, []);

  const AddItem = async (id, amount) => {
    try {
      const response = await fetchRequest(`/foods/${id}/addToBasket`, {
        method: "POST",
        body: { amount: amount },
      });

      dispatch({ type: constans.ADD, payload: response.items });
    } catch (error) {
      new Error("you make mistake");
    }
  };
  //****/
  const addToBasket = async () => {
    try {
      const response = await fetchRequest(`/basket`);
      dispatch({ type: constans.GETBASKET, payload: response.items });
    } catch (error) {
      new Error("You make mistake");
    }
  };

  ////

  const Increment = async (id, amount) => {
    try {
      const response = await fetchRequest(`/basketItem/${id}/update`, {
        method: "PUT",
        body: { amount: amount + 1 },
      });
      dispatch({ type: constans.INCREMENT, payload: response.items });
    } catch (error) {
      new Error(error);
    }
  };

  ////
  const decrement = async (id, amount) => {
    if (amount !== 1) {
      try {
        const response = await fetchRequest(`/basketItem/${id}/update`, {
          method: "PUT",
          body: { amount: amount - 1 },
        });
        dispatch({ type: constans.decrement, payload: response.items });
      } catch (error) {
        new Error(error);
      }
    } else {
      try {
        const response = await fetchRequest(`/basketItem/${id}/delete`, {
          method: "DELETE",
        });
        dispatch({ type: constans.decrement, payload: response.items });
      } catch (error) {
        new Error("You make mistake");
      }
    }
  };

  // const getTotalAmount = cartState?.reduce(
  //   (sum, { price, amount }) => sum + amount * price,
  //   0
  // );

  useEffect(() => {
    addToBasket();
  }, []);

  const CardValue = {
    // getTotalAmount,
    AddItem,
    addToBasket,
    items: cartState,
    Increment,
    decrement,
  };

  return (
    <CardContext.Provider value={CardValue}>{children}</CardContext.Provider>
  );
};
