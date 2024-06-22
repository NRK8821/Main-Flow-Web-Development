import React, { useState } from 'react';
import ImageItem from './ImageItem';
import ImageModal from './ImageModal';
import './ImageGallery.css';

const images = [
  'https://digitalassets.tesla.com/discovery-tesla-com/image/upload/f_auto,q_auto/Homepage-Cybertruck-Desktop.jpg',
  'https://cdni.autocarindia.com/ExtraImages/20240229122047_Tesla_Roadster.jpg',
  'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202402/65e00bfb7a3d1-tesla-roadster-294546125-16x9.jpg',
  'https://www.motortrend.com/uploads/sites/5/2017/11/2020-Tesla-Roadster-05-1.jpg?fit=around%7C875:492',
  'https://www.topgear.com/sites/default/files/2021/06/0x0-ModelS_02.jpg',
  'https://www.teslarati.com/wp-content/uploads/2022/02/tesla-model-s-plaid-yoke.jpg',
  'https://i.pcmag.com/imagery/articles/04YRj5XOcc8GpDncGjktDck-1..v1623398172.jpg',
  'https://electrek.co/wp-content/uploads/sites/3/2024/04/Tesla-Model-S-Plaid-Sport-seats.jpg?quality=82&strip=all',
  'https://ev-database.org/img/auto/Tesla_Model_X/Tesla_Model_X-02.jpg',
  'https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-Offsite-23.jpg?w=768&width=768&q=75&format=webp',
  'https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-Offsite-5.jpg?w=768&width=768&q=75&format=webp',
  'https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-Offsite-6.jpg?w=768&width=768&q=75&format=webp',
  'https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-1.jpg?w=768&width=768&q=75&format=webp',
  'https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-2.jpg?w=768&width=768&q=75&format=webp',
  'https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-3.jpg?w=768&width=768&q=75&format=webp',
  'https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-4.jpg?w=768&width=768&q=75&format=webp',
  'https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-5.jpg?w=768&width=768&q=75&format=webp',
  //'https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-6.jpg?w=768&width=768&q=75&format=webp',
  'https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-26.jpg?w=768&width=768&q=75&format=webp',
  'https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-20.jpg?w=768&width=768&q=75&format=webp',
  'https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-28.jpg?w=768&width=768&q=75&format=webp',
  'https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-25.jpg?w=768&width=768&q=75&format=webp',
  'https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-Offsite-7.jpg?w=768&width=768&q=75&format=webp',
  'https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-Offsite-2.jpg?w=768&width=768&q=75&format=webp',
  'https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-Offsite-14.jpg?w=768&width=768&q=75&format=webp',
  'https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-Offsite-25.jpg?w=768&width=768&q=75&format=webp',
  'https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-Offsite-22.jpg?w=768&width=768&q=75&format=webp',
  'https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-Offsite-26.jpg?w=768&width=768&q=75&format=webp',
  //'https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-Offsite-27.jpg?w=768&width=768&q=75&format=webp',
  'https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-Offsite-21.jpg?w=768&width=768&q=75&format=webp',
  'https://www.motortrend.com/uploads/sites/5/2017/11/2020-Tesla-Roadster-09.jpg?fit=around%7C875:492',
  'https://www.motortrend.com/uploads/2022/11/2023-Tesla-Model-X-interior-15.jpg?fit=around%7C875:492',
  'https://www.motortrend.com/uploads/2022/11/2023-Tesla-Model-X-interior-13.jpg?fit=around%7C875:492',
  'https://www.motortrend.com/uploads/2022/11/2023-Tesla-Model-X-interior-10.jpg?fit=around%7C875:492',
  'https://www.motortrend.com/uploads/2022/11/2023-Tesla-Model-X-interior-9.jpg?fit=around%7C875:492',
  'https://www.motortrend.com/uploads/2022/11/2023-Tesla-Model-X-interior-8.jpg?fit=around%7C875:492',
  'https://www.motortrend.com/uploads/2022/11/2023-Tesla-Model-X-interior-14.jpg?fit=around%7C875:492',
  'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-LHD-v2.jpg'
];


const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <div className="image-gallery-container">
      <h1 className="gallery-heading">#</h1>
      <div className="image-gallery">
        {images.map((image, index) => (
          <ImageItem key={index} src={image} openModal={openModal} />
        ))}
        {selectedImage && (
          <ImageModal
            src={selectedImage}
            closeModal={closeModal}
            nextImage={nextImage}
            prevImage={prevImage}
          />
        )}
      </div>
    </div>
  );
};

export default ImageGallery;