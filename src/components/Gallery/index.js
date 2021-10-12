import { React } from "react";
import { ContainerEl } from "../Container/ContainerEl";
import GalleryItem from "../GalleryItem";
import { ImageEl } from "../Image/ImageEl";
import { GalleryWrapper } from "./GalleryElements";

const Gallery = ({ data, startSlideShow, isSlideShowOn, currentSlide }) => {
  return (
    <>
      {data.length === 0 ? null : (
        <>
          <GalleryWrapper>
            <ContainerEl>
              <div className="macy-container">
                {data.map((item, i) => {
                  return (
                    <div key={i} onClick={() => startSlideShow(i)}>
                      <GalleryItem item={item} />
                    </div>
                  );
                })}
              </div>
              {isSlideShowOn && (
                <div>
                  <ImageEl src={data[currentSlide].images.hero.large} />
                </div>
              )}
            </ContainerEl>
          </GalleryWrapper>
        </>
      )}
    </>
  );
};

export default Gallery;
