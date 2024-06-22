import React from 'react';
import './ImageItem.css';

const ImageItem = ({ src, openModal }) => {
  return (
    <div className="image-item" onClick={() => openModal(src)}>
      <img src={src} alt="Gallery Item" />
    </div>
  );
};

export default ImageItem;
