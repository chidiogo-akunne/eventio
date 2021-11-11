import styled from "styled-components";
import Colors from "../../../constants/colors";
import Fonts from "../../../constants/fonts";

export const CardWrapper = styled.div`
  height: 300px;
  margin-bottom: 1.5rem;
  .card {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 768px) {
    .card {
      flex: 1;
      width: 18rem;
    }
  }
  @media (min-width: 1020px) {
    .card {
      width: 20rem;
      margin-right: 1.5rem;
    }
  }
  @media (min-width: 1200px) {
    .card {
      width: 22rem;
    }
  }
  @media (min-width: 1400px) {
    .card {
      width: 24rem;
    }
  }
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  p {
    color: ${Colors.greyText};
    font-size: 0.875rem;
    font-family: ${Fonts.Hind_Regular};
  }
  h2 {
    color: ${Colors.darkGrey};
    font-size: 1.375rem;
    font-family: ${Fonts.Hind_Regular};
    margin-top: 1.5rem;
    line-height: 20px;
  }
  .creator {
    color: ${Colors.mediumGreySecondary};
  }
  .description {
    font-size: 1rem;
    margin: 1.5rem 0;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  .capacity {
    display: flex;
    align-items: center;
    svg {
      margin-right: 0.5rem;
      p {
        font-size: 0.875rem;
        color: ${Colors.greyText};
      }
    }
  }
  button {
    width: 6rem;
    height: 2rem;
    font-family: ${Fonts.Hind_Regular};
    font-size: 0.875rem;
    font-weight: 500;
  }
`;

export const ColumnCard = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  .col-card {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 1020px) {
    .col-card {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  p {
    color: ${Colors.greyText};
    font-size: 0.875rem;
    font-family: ${Fonts.Hind_Regular};
  }
  h2 {
    color: ${Colors.darkGrey};
    font-size: 1.2rem;
    font-family: ${Fonts.Hind_Regular};
    line-height: 20px;
  }
  .col-description {
    font-size: 0.9rem;
  }
  .col-creator {
    display: none;
  }
  .col-large {
    display: none;
  }
  @media (min-width: 1020px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .col-creator {
    display: block;
    color: ${Colors.mediumGreySecondary};
  }
  .col-large {
    display: flex;
  }
`;

export const Col = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  .col-capacity {
    margin-top: 1rem;
  }
  .createdAt {
    color: ${Colors.mediumGrey};
    font-size: 0.7rem;
  }
  button {
    width: 6rem;
    height: 2rem;
    font-family: ${Fonts.Hind_Regular};
    font-size: 0.875rem;
    font-weight: 500;
  }

  @media (min-width: 1020px) {
    .col-capacity {
      display: none;
    }
  }
`;
