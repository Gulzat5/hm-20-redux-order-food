import React from "react";
import styled from "styled-components";
import { MealItems } from "./MealItems";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMeals } from "../../store/meals/mealsReducer";
import { getBasket } from "../../store/BasketReducer";

export const Meals = () => {
  const { meals } = useSelector((state) => state.meals);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeals());

    dispatch(getBasket());
  }, [dispatch]);

  return (
    <Conatainer>
      {meals?.map((meal) => {
        return <MealItems key={meal._id} meal={meal} />;
      })}
    </Conatainer>
  );
};

const Conatainer = styled.div`
  background-color: #ffffff;
  width: 80%;
  margin: 0 auto;
  border-radius: 16px;
  padding: 40px;
`;
