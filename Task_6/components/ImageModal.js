import React from 'react';
import './ImageModal.css';

const ImageModal = ({ src, closeModal, nextImage, prevImage }) => {
  return (
    <div className="image-modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>&times;</span>
        <button className="prev" onClick={prevImage}>&#10094;</button>
        <img src={src} alt="Selected" />
        <button className="next" onClick={nextImage}>&#10095;</button>
      </div>
    </div>
  );
};

export default ImageModal;
