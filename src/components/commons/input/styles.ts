import styled from "styled-components";
import Fonts from "../../../constants/fonts";
import Colors from "../../../constants/colors";

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  color: ${Colors.darkGrey};
  font-family: ${Fonts.Hind_Regular};
  font-size: 1rem;
  transition: all linear 0.2s;
  outline: none;
  border: none;
  border-bottom: 1px solid ${Colors.lightGrey};
  padding-top: 0.5rem;
  padding-bottom: 0.2rem;
  ::placeholder {
    color: ${Colors.mediumGrey};
  }
  ::-webkit-input-placeholder {
    color: ${Colors.mediumGrey};
  }
  :-ms-input-placeholder {
    color: ${Colors.mediumGrey};
  }
  ::-ms-input-placeholder {
    color: ${Colors.mediumGrey};
  }
  ::-moz-placeholder {
    color: ${Colors.mediumGrey};
  }
  :-ms-input-placeholder {
    color: ${Colors.mediumGrey};
  }
  &:focus {
    border-color: ${Colors.darkGrey};
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const InputCover = styled.div`
  width: 100%;
  background-color: transparent;
  position: relative;
  margin-bottom: 2.5rem;
  margin-top: 1rem;
  .error {
    color: ${Colors.violetRed};
    font-size: 0.875rem;
    text-align: left;
    margin-top: 0.3rem;
  }
`;

export const Label = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: -0.8rem;
  p {
    color: ${Colors.mediumGrey};
    margin: 0;
  }
`;
