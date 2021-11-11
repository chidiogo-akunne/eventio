import styled from "styled-components";
import Colors from "../../../constants/colors";
import { Link } from "react-router-dom";

export const Container = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.offWhite};
`;

export const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  margin-top: 2.5rem;
  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;

export const BottomButton = styled(Link)`
  background-color: ${Colors.darkGrey};
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.5rem;
  color: ${Colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  border-radius: 50%;
  @media (min-width: 768px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;
