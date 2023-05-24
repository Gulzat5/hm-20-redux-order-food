import { fetchRequest } from "../../lib/fetAPI";

export const mealsActionTypes = {
  GET_MEALS: "GET_MEALS",
};
const initialState = {
  meals: [],
};

export const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case mealsActionTypes.GET_MEALS:
      return {
        ...state,
        meals: action.payload,
      };

    default:
      return state;
  }
};

export const getMeals = () => {
  return async (dispatch) => {
    try {
      const response = await fetchRequest("/foods");

      dispatch({ type: mealsActionTypes.GET_MEALS, payload: response });
    } catch (error) {
      new Error(error);
    }
  };
};
