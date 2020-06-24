import React from "react";
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ listImages }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem />
    </ul>
  );
};

export default ImageGallery;
