import styled from "styled-components";
import summaryImage from "../../assets/Img/pexels-alexy-almond-3756523 1.png";
import { MealSummaryCard } from "./MealSummaryCard";
export const MealSummary = () => {
  return (
    <Container>
      <Image>
        <img src={summaryImage} alt="summary" />
      </Image>
      <MealSummaryCard />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  margin-bottom: 135px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image = styled.div`
  width: 100%;
  height: 432px;

  img {
    width: 100%;
    height: 100%;
  }
`;
