import Image from "next/image";
import React, { useState } from "react";
type GalleryProps = {
  images: string[];
};

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const openImage = (image: string) => {
    setCurrentImage(image);
  };

  const closeImage = () => {
    setCurrentImage(null);
  };

  return (
    <div className="relative mx-auto flex    flex-row flex-wrap">
      {images.map((image, index) => (
        <Image
          key={index}
          width={100}
          height={100}
          src={image}
          alt={`Image ${index + 1}`}
          onClick={() => openImage(image)}
        />
      ))}

      {currentImage && (
        <div className="modal">
          <span className="close" onClick={closeImage}>
            &times;
          </span>
          <Image
            width={100}
            height={100}
            src={currentImage}
            alt="Current Image"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
