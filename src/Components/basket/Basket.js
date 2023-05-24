import React, { useEffect } from "react";
import { Modal } from "../UI/Modal";
import { BasketItem } from "./BasketItem";
import { TotalAmount } from "./TotalAmount";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getBasket } from "../../store/BasketReducer";
export const Basket = ({ onToggle }) => {
  const { basket } = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  const getTotalPrice = basket?.reduce(
    (prev, current) => prev + current.amount * current.price,
    0
  );

  useEffect(() => {
    dispatch(getBasket());
  }, [dispatch]);
  return (
    <Modal>
      <Content>
        {basket?.length ? (
          <FixedWidthContainer>
            {basket?.map((item) => {
              return (
                item.amount > 0 && (
                  <BasketItem
                    item={item}
                    key={item._id}
                    title={item.title}
                    price={item.price}
                    amount={item.amount}
                    id={item._id}
                  />
                )
              );
            })}
          </FixedWidthContainer>
        ) : null}
        <TotalAmount onClose={onToggle} getTotalPrice={getTotalPrice} />
      </Content>
    </Modal>
  );
};
const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;
`;
const FixedWidthContainer = styled.div`
  max-height: 250px;
  overflow-y: scroll;
`;
