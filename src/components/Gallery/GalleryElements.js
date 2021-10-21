import styled from "styled-components";

export const GalleryWrapper = styled.main`
  margin-top: 17rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: ${(props) => (props.isSlideShowOn ? "block" : "none")};
    z-index: 1;
  }
`;
