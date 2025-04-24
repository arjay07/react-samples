import { useState } from "react";
import "./ImageCarousel.css";

export default function ImageCarousel({
  images,
}: Readonly<{
  images: ReadonlyArray<{ src: string; alt: string }>;
}>) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const nextIndex = currentImageIndex + 1;
    setCurrentImageIndex(nextIndex < images.length ? nextIndex : 0);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex - 1;
    setCurrentImageIndex(prevIndex >= 0 ? prevIndex : images.length - 1);
  };

  return (
    <div className="carousel">
      {images.map(({ alt, src }, index) => {
        return index === currentImageIndex ? (
          <img key={src} alt={alt} src={src} />
        ) : null;
      })}
      <div className="controls">
        <button className="prevBtn" onClick={prevImage}>
          <span className="visually-hidden">Previous</span>
          &#9204;
        </button>
        <button className="nextBtn" onClick={nextImage}>
          <span className="visually-hidden">Next</span>
          &#9205;
        </button>
      </div>
      <div className="pageBtns">
        {[...Array(images.length).keys()].map((value) => (
          <button
            key={value}
            onClick={() => setCurrentImageIndex(value)}
            className={value === currentImageIndex ? "active" : ""}
          >
            <span className="visually-hidden">Image {value + 1}</span>
            &#9679;
          </button>
        ))}
      </div>
    </div>
  );
}
