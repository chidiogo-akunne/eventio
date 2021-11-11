import styled from "styled-components";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

export const Container = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.offWhite};
  padding: 0 1rem;
  .card {
    width: 100%;
    background-color: ${Colors.white};
    font-family: ${Fonts.Hind_Regular};
    text-align: center;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
  h4 {
    color: ${Colors.darkGrey};
    font-size: 1.3rem;
    font-weight: 400;
    margin-top: 2rem;
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
      margin: 2.5rem auto 2rem;
    }
  }
  @media (min-width: 768px) {
    .card {
      max-width: 30rem;
      align-self: center;
      padding: 0 1.5rem;
    }
    button {
      width: 40% !important;
      margin-bottom: 3rem !important;
    }
  }
`;
