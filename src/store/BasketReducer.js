import { fetchRequest } from "../lib/fetAPI";

const initialState = {
  basket: [],
  totalAmount: 0,
  amount: 0,
};

const basketTypes = {
  GET_BASKET: "GET_BASKET",
  INCREMENT_BASKET_ITEM: "INCREMENT_BASKET_ITEM",
  DECREMENT_BASEKET_ITEM: "DECREMENT_BASEKET_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case basketTypes.GET_BASKET:
      return {
        ...state,
        basket: action.payload,
      };
    case basketTypes.INCREMENT_BASKET_ITEM:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const getBasket = () => {
  return async (dispatch) => {
    try {
      const response = await fetchRequest("/basket");
      dispatch({
        type: basketTypes.GET_BASKET,
        payload: response.items,
      });
    } catch (error) {
      new Error("You make mistake");
    }
  };
};

export const deleteBasketItem = (id) => () => {
  return async (dispatch) => {
    try {
      await fetchRequest(`/basketItem/${id}/delete`, {
        method: "DELETE",
      });
      dispatch(getBasket());
    } catch (error) {
      new Error("error");
    }
  };
};
// export const updateBasket = (id, amount) => {
//   return async (dispatch) => {
//     try {
//       await fetchRequest(`/basketItem/${id}update`, {
//         method: "PUT",
//         body: { amount },
//       });
//       dispatch(getBasket());
//     } catch (error) {
//       new Error(error);
//     }
//   };
// };
export function incrementAmount(id, amount) {
  return async (dispatch) => {
    try {
      const responce = await fetchRequest(`/basketItem/${id}/update`, {
        method: "PUT",
        body: { amount: amount + 1 },
      });
      dispatch({
        type: basketTypes.INCREMENT_BASKET_ITEM,
        payload: responce.items,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
}

export function decrementAmount(id, amount) {
  return async (dispatch) => {
    if (amount !== 0) {
      const responce = await fetchRequest(`/basketItem/${id}/update`, {
        method: "PUT",
        body: { amount: amount },
      });
      dispatch({
        type: basketTypes.DECREMENT_BASEKET_ITEM,
        payload: responce.items,
      });
    } else {
      const responce = await fetchRequest(`/basketItem/${id}/delete`, {
        method: "DELETE",
      });

      dispatch({
        type: basketTypes.DECREMENT_BASEKET_ITEM,
        payload: responce.items,
      });
    }
  };
}

export const addToBasketItem = (data) => {
  return async (dispatch) => {
    try {
      fetchRequest(`/foods/${data.id}/addToBasket`, {
        method: "POST",
        body: { amount: data.amount },
      });
      dispatch(getBasket());
    } catch (error) {
      new Error(error);
    }
  };
};
