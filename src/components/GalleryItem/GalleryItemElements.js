import styled from "styled-components";
import { ImageEl } from "../Image/ImageEl";

export const GalleryFigure = styled.figure`
  transition: var(--transition) opacity;

  &:hover {
    cursor: pointer;
    opacity: .8;
  }
`;

export const GalleryImage = styled(ImageEl)`
  width: 100%;
`;

export const GalleryFigcaption = styled.figcaption`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 5rem 5rem 2rem 2rem;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.01) 0%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }
`;

export const GalleryPaintingTitle = styled.h2`
  font-size: 2.4rem;
  position: relative;
  margin-bottom: 0.5rem;
`;

export const GalleryPaintingAuthor = styled.h3`
  font-size: 1.4rem;
  position: relative;
`;
