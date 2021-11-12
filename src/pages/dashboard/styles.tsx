import styled from "styled-components";
import Fonts from "../../constants/fonts";
import Colors from "../../constants/colors";

export const Container = styled.section`
  background-color: ${Colors.offWhite};
  @media (min-width: 768px) {
    padding: 0 3rem;
  }
  @media (min-width: 1300px) {
    padding: 0 4rem;
  }
`;

export const LoaderWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12rem auto;
  svg {
    width: 4rem;
    height: 4.5rem;
    * {
      fill: ${Colors.darkGrey};
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0 2.5rem;
  @media (min-width: 768px) {
    margin-top: 4rem;
  }
`;

export const LeftCover = styled.div`
  .mobile {
    display: flex;
    align-items: center;
    p {
      font-family: ${Fonts.Hind_Regular};
      font-size: 0.7rem;
      color: ${Colors.greyText};
    }
    .filterEvent {
      color: ${Colors.darkGrey};
      margin-left: 3px;
      margin-right: 4px;
    }
    svg {
      width: 0.7rem;
      height: 0.7rem;
    }
    .dropdown {
      display: inline-block;
      position: relative;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      top: 7rem;
      left: 4rem;
      overflow: auto;
      z-index: 99999;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      ul {
        list-style: none;
        li {
          font-family: ${Fonts.Hind_Regular};
          font-size: 0.7rem;
          color: ${Colors.greyText};
          cursor: pointer;
          padding: 0.5rem 0.8rem;
        }
      }
    }
    &:hover .dropdown-content {
      display: block;
    }
  }
  .desktop {
    display: none;
  }
  @media (min-width: 768px) {
    .mobile {
      display: none;
    }
    .desktop {
      display: flex;
      align-items: center;
      p {
        font-family: ${Fonts.Hind_Regular};
        font-size: 0.9rem;
        margin-right: 2rem;
      }
    }
  }
`;

export const RightCover = styled.div`
  display: flex;
  align-items: center;
  button {
    background-color: transparent;
  }
  .gridVisible {
    background-color: transparent;
    svg {
      * {
        fill: ${Colors.darkGrey};
      }
    }
  }
  .listVisible {
    background-color: transparent;
    margin-left: 0.5rem;
  }
  .listNonVisible {
    background-color: transparent;
    margin-left: 0.5rem;
    svg {
      * {
        fill: ${Colors.mediumGrey};
      }
    }
  }
`;

export const EventList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1020px) {
    justify-content: flex-start;
  }
  @media (min-width: 1400px) {
    justify-content: space-between;
  }
`;
