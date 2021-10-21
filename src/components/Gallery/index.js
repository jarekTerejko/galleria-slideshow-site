import React, { useContext } from "react";
import { ContainerEl } from "../Container/ContainerEl";
import GalleryItem from "../GalleryItem";
import Slider from "../Slider";
import { GalleryWrapper } from "./GalleryElements";
import { AppContext } from "../../context/AppContext";

const Gallery = () => {
  const { startSlideShow, isSlideShowOn, data } = useContext(AppContext);

  return (
    <>
      {data.length === 0 ? null : (
        <GalleryWrapper isSlideShowOn={isSlideShowOn}>
          <ContainerEl>
            <div className="macy-container">
              {data.map((item, i) => {
                return (
                  <div key={i} onClick={() => startSlideShow(i)}>
                    <GalleryItem item={item} isSlideShowOn />
                  </div>
                );
              })}
            </div>
          </ContainerEl>
          {isSlideShowOn && <Slider />}
        </GalleryWrapper>
      )}
    </>
  );
};

export default Gallery;
