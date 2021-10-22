import { motion } from "framer-motion";
import styled from "styled-components";
import { ImageEl } from "../Image/ImageEl";

export const SliderWrapper = styled(motion.section)`
  position: absolute;
  left: 0;
  top: 170px;
  top: 0;
  width: 100%;
  min-height: 100%;
  min-height: 93.4rem;
  background: var(--color-white);
  padding-top: 6rem;
  z-index: 2;
`;

export const SliderInnnerWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
`;

export const SliderColLeft = styled(motion.div)`
  position: relative;
`;
export const SliderColRight = styled(motion.div)`
  position: relative;
  padding-top: 13rem;
  padding-right: 10rem;
`;

export const SliderImageLarge = styled(ImageEl)`
  max-width: 48rem;
`;
export const SliderImageSmall = styled(ImageEl)`
  max-width: 48rem;
`;

export const SliderBasicInfoContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding-left: 5.5rem;
  padding-bottom: 5.5rem;
  background: var(--color-white);
  width: 24.5rem;
`;

export const SliderPaintingTitle = styled.h2`
  color: var(--color-black);
  font-size: ${(props) => (props.footerPaintingTitle ? "2rem" : "4rem")};
  margin-bottom: 3rem;
  margin-bottom: ${(props) => (props.footerPaintingTitle ? "1rem" : "3rem")};
`;
export const SliderPaintingAuthor = styled.h4`
  font-size: 1.4rem;

  color: ${(props) =>
    props.footerPaintingAuthor ? "var(--color-grey-1)" : "var(--color-grey-2)"};
`;

export const SliderPaintingAuthorImage = styled.img`
  position: absolute;
  bottom: -62px;
  right: 31px;

  @media screen and (max-width: 1121px) {
    right: 0;
  }
`;

export const SliderFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  min-height: 9.5rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--color-grey-3);
  }
`;

export const SLiderFooterProgressBar = styled(motion.div)`
  background: var(--color-black);
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const SliderPaintingOverview = styled.p`
  color: var(--color-grey-1);
  font-size: 1.4rem;
  line-height: 2;
  max-width: 34rem;
  margin-left: auto;
  margin-bottom: 5rem;
`;

export const SliderPaintingYear = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 13vw;
  color: var(--color-grey-3);
  z-index: -1;
  line-height: 1;
  @media screen and (min-width: 1440px) {
    font-size: 18.6rem;
  }
`;

export const SliderFooterInnerWrapper = styled.div`
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SliderFooterColLeft = styled(motion.div)`
  height: 100%;
`;
export const SliderFooterColRight = styled.div`
  height: 100%;
`;

export const SliderBtn = styled(motion.button)`
  background: none;
  border: none;
  margin: ${(props) => (props.nextSlideBtn ? "0 0 0 2rem" : "0 2rem 0 0 ")};
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
