import { motion } from "framer-motion";
import styled from "styled-components";
import { ImageEl } from "../Image/ImageEl";

export const SliderWrapper = styled(motion.section)`
  position: absolute;
  left: 0;
  /* top: 170px; */
  top: 0;
  width: 100%;
  min-height: 100%;
  min-height: 93.4rem;
  min-height: 89.4rem;
  background: var(--color-white);
  padding-top: 6rem;
  z-index: 2;

  @media screen and (max-width: 375px) {
    min-height: 120rem;
  }
`;

export const SliderInnnerWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;

  @media screen and (max-width: 1030px) {
    grid-template-columns: 1fr;
  }
`;

export const SliderColLeft = styled(motion.div)`
  position: relative;
`;

export const SliderColRight = styled(motion.div)`
  position: relative;
  padding-top: 13rem;
  padding-right: 10rem;

  @media screen and (max-width: 1030px) {
    min-height: 78rem;
    padding-right: 0;
  }
`;

export const SliderImageLarge = styled(ImageEl)`
  max-width: 48rem;

  @media screen and (max-width: 560px) {
    max-width: 100%;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
export const SliderImageSmall = styled(ImageEl)`
  display: none;

  @media screen and (max-width: 500px) {
    display: block;
  }
`;

export const SliderBasicInfoContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding-left: 5.5rem;
  padding-bottom: 5.5rem;
  background: var(--color-white);
  width: 24.5rem;

  @media screen and (max-width: 500px) {
    bottom: -26px;
    top: unset;
    left: 0;
    padding: 2rem 0 0;
  }
`;

export const SliderPaintingTitle = styled.h2`
  color: var(--color-black);
  font-size: ${(props) => (props.footerPaintingTitle ? "2rem" : "4rem")};
  margin-bottom: 3rem;
  margin-bottom: ${(props) => (props.footerPaintingTitle ? "1rem" : "3rem")};

  @media screen and (max-width: 500px) {
    font-size: ${(props) => (props.footerPaintingTitle ? "1.2rem" : "2rem")};
    margin-bottom: ${(props) => (props.footerPaintingTitle ? "1rem" : "1rem")};
  }
`;
export const SliderPaintingAuthor = styled.h4`
  font-size: 1.4rem;
  color: ${(props) =>
    props.footerPaintingAuthor ? "var(--color-grey-1)" : "var(--color-grey-2)"};

  @media screen and (max-width: 500px) {
    font-size: ${(props) => (props.footerPaintingAuthor ? "1rem" : "")};
  }
`;

export const SliderPaintingAuthorImage = styled.img`
  position: absolute;
  bottom: -62px;
  right: 31px;

  @media screen and (max-width: 1121px) {
    right: 0;
  }

  @media screen and (max-width: 1030px) {
    bottom: 0;
  }

  @media screen and (max-width: 500px) {
    bottom: -110px;
    left: 0;
    max-width: 64px;
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

  @media screen and (max-width: 1030px) {
    margin-left: auto;
    margin-right: auto;
  }
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

  @media screen and (max-width: 1030px) {
    left: 0;
    top: 50px;
    font-size: 20vw;
  }

  @media screen and (max-width: 500px) {
    right: 0;
    top: 80px;
    left: unset;
    font-size: 18vw;
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
  display: flex;
  margin-left: 2rem;
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

  @media screen and (max-width: 500px) {
    margin: ${(props) => (props.nextSlideBtn ? "0 0 0 1rem" : "0 1rem 0 0 ")};
  }
`;

export const SliderModalOverlay = styled(motion.div)`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 2;
  padding: 3rem 2rem;
  padding-top: 18rem;
  padding-bottom: 10rem;
  overflow-y: scroll;
`;

export const SliderModalWrapper = styled(motion.div)`
  position: relative;
  max-width: 144rem;
  margin: 0rem auto;
  display: flex;
  justify-content: center;
`;

export const SliderModalImgWrapper = styled.div`
  position: relative;
`;
