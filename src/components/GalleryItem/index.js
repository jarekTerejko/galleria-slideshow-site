import React from "react";
import {
  GalleryFigcaption,
  GalleryFigure,
  GalleryImage,
  GalleryPaintingAuthor,
  GalleryPaintingTitle,
} from "./GalleryItemElements";

const GalleryItem = ({ item}) => {
  return (
    <GalleryFigure >
      <GalleryImage src={item.images.thumbnail} alt={item.name} />
      <GalleryFigcaption>
        <GalleryPaintingTitle>{item.name}</GalleryPaintingTitle>
        <GalleryPaintingAuthor>{item.artist.name}</GalleryPaintingAuthor>
      </GalleryFigcaption>
    </GalleryFigure>
  );
};

export default GalleryItem;
