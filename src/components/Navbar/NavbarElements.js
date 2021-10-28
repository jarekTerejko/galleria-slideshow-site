import styled from "styled-components";
import { ImageEl } from "../Image/ImageEl";

export const NavbarWrapper = styled.nav`
  height: 17rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background: var(--color-white);
`;

export const NavbarInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 13rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: var(--color-grey-2);
  }
`;

export const NavbarLogo = styled(ImageEl)``;

export const NabarSlideShowBtn = styled.button`
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: var(--ff);
  padding: 0.5rem;
  background: none;
  font-size: 1.4rem;
  color: var(--color-grey-1);
  transition: color var(--transition);

  @media screen and (max-width: 500px) {
    font-size: 1rem;
    padding-left: 1rem;
  }

  &:hover {
    color: var(--color-black);
  }
`;

export const NavbarLink = styled.a`
  text-decoration: none;

  @media screen and (max-width: 500px) {
    max-width: 12rem;
  }
`;
