import styled from "styled-components";
import Fonts from "../../constants/fonts";
import Colors from "../../constants/colors";
import vader from "../../assets/images/vader.svg";

export const Wrapper = styled.section`
  height: 22rem;
  background-color: ${Colors.white};
  background: url(${vader});
  background-repeat: no-repeat;
  background-size: 23rem;
  background-position: left -52% top 35%;
  @media (min-width: 768px) {
    background-position: left -35% top 85%;
    background-color: ${Colors.offWhite};
  }
  @media (min-width: 1100px) {
    width: 100%;
    background-position: left -15% top 75%;
  }
`;

export const Container = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  font-family: ${Fonts.Hind_Regular};
  margin-left: auto;
  margin-right: auto;
  h4 {
    color: ${Colors.darkGrey};
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 40px;
    text-align: left;
  }
  p {
    color: ${Colors.greyText};
    font-size: 0.875rem;
    line-height: 24px;
    text-align: left;
  }
  button {
    background-color: ${Colors.darkGrey};
    height: 3rem;
    width: 50%;
    margin: 0 0 4rem;
    &:hover {
      background-color: ${Colors.darkGreySecondary};
    }
  }
  @media (min-width: 600px) {
    button {
      width: 40%;
    }
  }
  @media (min-width: 768px) {
    width: 70%;
    margin-top: 7rem;
  }
  @media (min-width: 1100px) {
    width: 60%;
    p {
      width: 70%;
    }
  }
`;
