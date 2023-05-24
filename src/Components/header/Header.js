import styled from "styled-components";
import { OrdetBusket } from "./OrderBusket";
export const Header = ({ onToggle }) => {
  return (
    <Container>
      <h1> ReacrMeals</h1>
      <OrdetBusket onToggle={onToggle}> Your card </OrdetBusket>
    </Container>
  );
};

const Container = styled.div`
  height: 100px;
  width: 100%;
  background-color: #8a2b06;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  position: fixed;
  z-index: 200;
  h1 {
    font-weight: 600;
    font-size: 38px;
    color: #fff;
  }
`;
