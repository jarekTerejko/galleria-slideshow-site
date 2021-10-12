import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper = styled.div`
  height: calc(100vh - 170px);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-white);
  transform: translateY(170px);

  @media screen and (max-width: 1030px) {
    transform: translateY(185px);
    height: calc(100vh - 185px);
  }
  @media screen and (max-width: 830px) {
    transform: translateY(60px);
    height: calc(100vh - 60px);
  }
`;

export const LoaderCircle = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &::after {
    content: "";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #000;
    border-color: #000 transparent #000 transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;
