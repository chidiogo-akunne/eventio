import styled from "styled-components";
import Fonts from "../../constants/fonts";
import Colors from "../../constants/colors";

export const Container = styled.section`
  width: 100%;
  background-color: ${Colors.white};
  font-family: ${Fonts.Hind_Regular};
  text-align: center;
  margin-top: 4rem;
  padding: 0 1.5rem;
  h4 {
    color: ${Colors.darkGrey};
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 40px;
  }
  p {
    color: ${Colors.greyText};
    font-size: 0.875rem;
    line-height: 24px;
  }
  .error {
    color: ${Colors.violetRed};
  }
  form {
    width: 100%;
    margin-top: 2rem;
    .link {
      font-size: 0.875rem;
      color: ${Colors.mediumGrey};
      line-height: 24px;
      a {
        color: ${Colors.greyText};
      }
    }
    button {
      height: 3rem;
      width: 90%;
      margin: 2.5rem auto 4rem;
    }
  }
  @media (min-width: 600px) and (max-width: 768px) {
    padding: 0 3.5rem;
    h4 {
      margin-top: 11rem;
    }
  }
  @media (min-width: 768px) {
    background-color: ${Colors.offWhite};
    width: 70%;
    text-align: left;
    form {
      margin-left: auto;
      margin-right: auto;
      .link {
        display: none;
      }
      button {
        width: 40%;
        margin: 3.5rem 0;
      }
    }
  }
  @media (min-width: 1400px) {
    width: 50%;
  }
`;
