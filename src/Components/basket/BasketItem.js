import React from "react";
import { Button } from "../UI/Button";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { decrementAmount, incrementAmount } from "../../store/BasketReducer";

export const BasketItem = ({ id, title, price, amount }) => {
  const dispatch = useDispatch();

  const increment = (id, amount) => {
    dispatch(incrementAmount(id, amount));
  };

  const decrement = (id, amount) => {
    dispatch(decrementAmount(id, amount - 1));
  };

  return (
    <Container>
      <h4>{title}</h4>
      <Content>
        <InformationBlock>
          <p>${price}</p>
          <span>x{amount}</span>
        </InformationBlock>

        <ButtonBlock>
          <Button
            borderRadius="squared"
            variant="outlined"
            onClick={() => decrement(id, amount)}
          >
            -
          </Button>
          <Button
            borderRadius="squared"
            variant="outlined"
            onClick={() => increment(id, amount)}
          >
            +
          </Button>
        </ButtonBlock>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 20px 0px;
  border-bottom: 2px solid #d6d6d6;

  h4 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 12px;
  }
`;

const Content = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonBlock = styled.aside`
  display: flex;
  gap: 15px;
`;

const InformationBlock = styled.article`
  display: flex;
  align-items: center;
  width: 155px;
  justify-content: space-between;

  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #ad5502;
  }

  span {
    font-weight: 500;
    font-size: 16px;
    border: 2px solid #171313;
    border-radius: 6px;
    padding: 6px 14px;
  }
`;
