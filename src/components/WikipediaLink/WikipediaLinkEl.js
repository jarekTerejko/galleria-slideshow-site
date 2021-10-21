import styled from "styled-components";

export const WikipediaLinkEl = styled.a`
  color: var(--color-grey-1);
  text-transform: uppercase;
  display: block;
  max-width: 34rem;
  margin-left: auto;
  transition: var(--transition) color;

  &:hover {
    color: var(--color-black);
  }
`;
