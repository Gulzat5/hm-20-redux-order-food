import { applyMiddleware, combineReducers, createStore } from "redux";
import { mealsReducer } from "./meals/mealsReducer";
import thunk from "redux-thunk";
import { basketReducer } from "./BasketReducer";

const rootReducer = combineReducers({
  meals: mealsReducer,
  basket: basketReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
