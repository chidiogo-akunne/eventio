import styled from "styled-components";
import Fonts from "../../../constants/fonts";
import Colors from "../../../constants/colors";

export const NavContainer = styled.nav`
  width: 100%;
  background-color: ${Colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  font-family: ${Fonts.Hind_Regular};
  padding: 1.6rem 1.5rem;
  .logo {
    z-index: 99999;
    svg {
      width: 1.3rem;
      height: 1.7rem;
      * {
        fill: ${Colors.darkGrey};
      }
    }
  }
  .authenticated-logo {
    svg {
      width: 1.3rem;
      height: 1.7rem;
      * {
        fill: ${Colors.darkGrey};
      }
    }
  }
  @media (min-width: 767px) {
    background-color: ${Colors.offWhite};
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    .authenticated-logo {
      svg {
        width: 2rem;
        height: 2.5rem;
      }
    }
    .logo {
      svg {
        width: 2rem;
        height: 2.5rem;
        * {
          fill: ${Colors.white};
        }
      }
    }
  }
`;

export const RightCover = styled.div`
  display: flex;
  align-items: center;
  a {
    font-size: 1rem;
    color: ${Colors.darkGrey};
  }
  p {
    display: none;
    color: ${Colors.greyText};
    font-size: 1rem;
  }
  svg {
    width: 0.7rem;
    height: 0.7rem;
    * {
      fill: ${Colors.grey};
    }
  }
  .close-text {
    display: none;
  }
  .close {
    display: flex;
    align-items: center;
  }
  .close-icon {
    font-size: 1.1rem;
    font-family: ${Fonts.Hind_SemiBold};
    color: ${Colors.darkGrey};
    margin-right: 6px;
  }
  .dropdown {
    display: inline-block;
    position: relative;
  }
  .dropdown-content {
    background-color: ${Colors.white};
    display: none;
    position: absolute;
    left: -3rem;
    overflow: auto;
    z-index: 99999;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    ul {
      list-style: none;
      li {
        color: ${Colors.greyText};
        cursor: pointer;
        padding: 0.5rem 0.8rem;
      }
    }
    button {
      color: ${Colors.greyText};
      cursor: pointer;
      padding: 0.5rem 0.8rem;
    }
  }
  &:hover .dropdown-content {
    display: block;
  }

  @media (min-width: 768px) {
    .close-text {
      display: block;
    }
    svg {
      width: 1rem;
      height: 0.8rem;
      margin-left: 5px;
    }
    p {
      display: block;
    }
  }
`;

export const Row = styled.div`
  display: none;
  p {
    color: ${Colors.link};
    font-size: 0.875rem;
    font-family: ${Fonts.Hind_Regular};
    margin-right: 5px;
  }
  a {
    color: ${Colors.darkGrey};
    font-size: 0.9rem;
    font-family: ${Fonts.Hind_Regular};
  }
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const NameCover = styled.div`
  background-color: ${Colors.grey};
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 8px;
  p {
    display: block;
    color: ${Colors.greyText};
    font-size: 0.857rem;
  }
  @media (min-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
    p {
      font-size: 1rem;
    }
  }
`;
