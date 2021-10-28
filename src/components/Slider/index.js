import { AnimatePresence } from "framer-motion";
import React, { useContext } from "react";
import { ContainerEl } from "../Container/ContainerEl";
import { ImageEl } from "../Image/ImageEl";
import {
  SliderBasicInfoContainer,
  SliderColLeft,
  SliderColRight,
  SliderFooter,
  SliderFooterInnerWrapper,
  SliderImageLarge,
  SliderImageSmall,
  SliderInnnerWrapper,
  SliderPaintingTitle,
  SliderPaintingAuthor,
  SliderWrapper,
  SliderPaintingAuthorImage,
  SliderPaintingOverview,
  SliderPaintingYear,
  SliderFooterColLeft,
  SliderFooterColRight,
  SliderBtn,
  SLiderFooterProgressBar,
  SliderModalOverlay,
  SliderModalWrapper,
  SliderModalImgWrapper,
} from "./SliderElements";
import IconBackBtn from "../../images/icon-back-button.svg";
import IconNextBtn from "../../images/icon-next-button.svg";
import { AppContext } from "../../context/AppContext";
import { WikipediaLinkEl } from "../WikipediaLink/WikipediaLinkEl";
import { ModalBtnEl } from "../ModalBtn/ModalBtnEl";
import IconViewImage from "../../images/icon-view-image.svg";

const Slider = () => {
  const {
    currentSlide,
    data,
    nextSlide,
    prevSlide,
    isModal,
    showModal,
    closeModal,
  } = useContext(AppContext);

  return (
    <SliderWrapper>
      {data
        .filter((_, iterator) => iterator === currentSlide)
        .map((slideItem, i) => {
          return (
            <div key={i}>
              {isModal && (
                <AnimatePresence>
                  <SliderModalOverlay
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <SliderModalWrapper>
                      <SliderModalImgWrapper>
                        {/* <SliderModalImg src={slideItem.images.gallery} /> */}
                        <ImageEl
                          src={slideItem.images.gallery}
                          alt={`${slideItem.name} - ${slideItem.artist.name}`}
                        />
                        <ModalBtnEl closeBtn onClick={closeModal}>
                          Close
                        </ModalBtnEl>
                      </SliderModalImgWrapper>
                    </SliderModalWrapper>
                  </SliderModalOverlay>
                </AnimatePresence>
              )}
              <ContainerEl>
                <AnimatePresence exitBeforeEnter>
                  <SliderInnnerWrapper
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <SliderColLeft>
                      <SliderImageLarge src={slideItem.images.hero.large} />
                      <SliderImageSmall src={slideItem.images.hero.small} />
                      <ModalBtnEl onClick={showModal}>
                        <ImageEl
                          src={IconViewImage}
                          style={{ marginRight: "20px" }}
                        />
                        View Image
                      </ModalBtnEl>
                      <SliderBasicInfoContainer>
                        <SliderPaintingTitle>
                          {slideItem.name}
                        </SliderPaintingTitle>
                        <SliderPaintingAuthor>
                          {slideItem.artist.name}
                        </SliderPaintingAuthor>
                      </SliderBasicInfoContainer>
                      <SliderPaintingAuthorImage src={slideItem.artist.image} />
                    </SliderColLeft>
                    <SliderColRight>
                      <SliderPaintingYear>{slideItem.year}</SliderPaintingYear>
                      <SliderPaintingOverview>
                        {slideItem.description}
                      </SliderPaintingOverview>
                      <WikipediaLinkEl href={slideItem.source} target="_blank">
                        Go to source
                      </WikipediaLinkEl>
                    </SliderColRight>
                  </SliderInnnerWrapper>
                </AnimatePresence>
              </ContainerEl>
              <SliderFooter currentSlide={currentSlide}>
                <AnimatePresence>
                  <SLiderFooterProgressBar
                    style={{
                      width: `calc((100% / 15) * (${currentSlide + 1}))`,
                    }}
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                </AnimatePresence>

                <ContainerEl>
                  <SliderFooterInnerWrapper>
                    <AnimatePresence exitBeforeEnter>
                      <SliderFooterColLeft
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <SliderPaintingTitle footerPaintingTitle>
                          {slideItem.name}
                        </SliderPaintingTitle>
                        <SliderPaintingAuthor footerPaintingAuthor>
                          {slideItem.artist.name}
                        </SliderPaintingAuthor>
                      </SliderFooterColLeft>
                    </AnimatePresence>
                    <SliderFooterColRight>
                      <SliderBtn
                        disabled={currentSlide === 0 ? true : false}
                        onClick={() => prevSlide()}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ImageEl src={IconBackBtn} />
                      </SliderBtn>
                      <SliderBtn
                        disabled={
                          currentSlide === data.length - 1 ? true : false
                        }
                        onClick={nextSlide}
                        nextSlideBtn
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ImageEl src={IconNextBtn} />
                      </SliderBtn>
                    </SliderFooterColRight>
                  </SliderFooterInnerWrapper>
                </ContainerEl>
              </SliderFooter>
            </div>
          );
        })}
    </SliderWrapper>
  );
};

export default Slider;
