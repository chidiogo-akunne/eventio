import styled from "styled-components";
import Colors from "../../../constants/colors";
import Fonts from "../../../constants/fonts";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.green};
  color: ${Colors.white};
  font-family: ${Fonts.Hind_Regular};
  font-size: 1rem;
  text-align: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all linear 0.2s;
  &:hover {
    background: ${Colors.greenSecondary};
  }
`;
