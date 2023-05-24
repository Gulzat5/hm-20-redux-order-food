import { useState } from "react";
import { Header } from "./Components/header/Header";
import { MealSummary } from "./Components/meal-summary/MealSummary";
import { Meals } from "./Components/meals/Meals";
import { Basket } from "./Components/basket/Basket";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  const [toggle, setToggle] = useState(false);
  function ToggleHandler() {
    setToggle((prev) => !prev);
  }

  return (
    <Provider store={store}>
      <Header onToggle={ToggleHandler} />
      <MealSummary />
      <Meals />
      {toggle && <Basket onToggle={ToggleHandler} />}
    </Provider>
  );
}

export default App;
