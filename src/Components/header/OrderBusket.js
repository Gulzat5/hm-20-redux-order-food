import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icons/Group.svg";
import { useContext, useEffect, useState } from "react";
import { CardContext } from "../../store/Card-contex";
import { useSelector } from "react-redux";

export const OrdetBusket = ({ children, onToggle }) => {
  const contex = useContext(CardContext);
  const [animation, setAnimation] = useState();
  const { basket } = useSelector((state) => state.basket);
  useEffect(() => {
    setAnimation("bit");
    const id = setTimeout(() => {
      setAnimation("");
    }, 300);
    return () => {
      clearTimeout(id);
    };
  }, [basket]);

  const amount = basket?.reduce((prev, current) => prev + current.amount, 0);

  return (
    <Button onClick={onToggle} className={animation}>
      <BasketIcon /> <OrderTitle>{children}</OrderTitle>
      <OrderBasketCount>{amount}</OrderBasketCount>
    </Button>
  );
};
const Button = styled.button`
  border: none;
  width: 249px;
  height: 59px;
  background: #5a1f08;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  &:hover {
    background-color: #4d1601;
  }
  &:active {
    background-color: #993108;
  }
  &.bit {
    animation: bit 300ms ease-out;
  }
  @keyframes bit {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;
const OrderTitle = styled.span`
  width: 78px;
  height: 24px;
  left: 1157px;
  top: 35px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: white;
`;
const OrderBasketCount = styled.span`
  background: #8a2b06;
  border-radius: 30px;
  display: inline-block;
  padding: 4px 13px;
  color: white;
`;
