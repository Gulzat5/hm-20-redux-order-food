import styled from "styled-components";

export const MealSummaryCard = () => {
  return (
    <Container>
      <h3> Delicious food, delivered to you</h3>
      <Paragraph>
        Choose your favorite meal from our broad selection of available meals
        and enjoy adelicious lunchor dinner at home.
      </Paragraph>
      <Paragraph>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </Paragraph>
    </Container>
  );
};
const Container = styled.div`
  max-width: 854px;
  width: 100%;
  height: 270px;
  height: 270px;
  background: #383838;

  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
  border-radius: 16px;

  position: absolute;
  left: 293px;
  top: 358px;
  z-index: 10;

  padding: 36px 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 54px;
    color: white;
    text-align: center;
  }
`;
const Paragraph = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: white;
  text-align: center;
`;
