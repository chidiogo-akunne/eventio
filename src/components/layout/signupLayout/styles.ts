import styled from "styled-components";
import starwars from "../../../assets/images/starwars.jpg";
import Colors from "../../../constants/colors";
import Fonts from "../../../constants/fonts";

export const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.white};
  @media (min-width: 768px) {
    height: 100%;
    background-color: ${Colors.offWhite};
    flex-direction: row;
  }
`;

export const LeftSection = styled.section`
  display: none;
  height: 100vh;
  background: url(${starwars}) no-repeat center;
  background-size: cover;
  position: relative;
  .bottom-text {
    width: 100%;
    color: ${Colors.white};
    padding: 0 2rem 4rem;
    margin-top: auto;
    * {
      text-align: center;
    }
    h1 {
      font-family: ${Fonts.Playfair};
      font-size: 2.25rem;
      font-weight: normal;
    }
    hr {
      width: 12px;
      height: 2px;
      background: ${Colors.violetRed};
      margin: 1.25rem auto;
      border: none;
    }
    p {
      color: ${Colors.greyText};
    }
  }
  @media (min-width: 768px) {
    display: flex;
    flex: 1.7;
  }
`;

export const RightSection = styled.main`
  height: 100%;
  background-color: ${Colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
  margin-top: 1rem;
  @media (min-width: 768px) {
    flex: 4;
    background-color: ${Colors.offWhite};
    align-self: center;
    padding: 2.5rem 0;
    margin-top: 0;
  }
`;
