import styled from "styled-components";

export const ModalBtnEl = styled.button`
  background: none;
  padding: 1rem;
  text-transform: uppercase;
  position: absolute;
  left: ${(props) => (props.closeBtn ? "" : "20px")};
  right: ${(props) => (props.closeBtn ? "-10px" : "")};
  bottom: ${(props) => (props.closeBtn ? "" : "20px")};
  top: ${(props) => (props.closeBtn ? "-50px" : "")};
  display: flex;
  align-items: center;
  color: var(--color-white);
  font-family: var(--ff);
  border: none;
  background: ${(props) => (props.closeBtn ? "none" : "rgba(0, 0, 0, 0.95)")};
  cursor: pointer;
`;
