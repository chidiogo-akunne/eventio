import styled from "styled-components";

export const Container = styled.div`
  .loading {
    -webkit-animation: spin 2s linear infinite;
    -moz-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    animation-name: spin;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
