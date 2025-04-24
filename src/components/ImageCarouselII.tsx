import { useState } from "react";
import "./ImageCarouselII.css";

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

  const transformContainerStyle = (index: number) => {
    const width = 600;
    const offset = index * width;
    return {
      transform: `translateX(-${offset}px)`,
      transition: "transform 0.5s ease-in-out",
    };
  }

  return (
    <div className="animated-carousel">
      <div className="image-container">
        {images.map(({ alt, src }) => (
          <img key={src} alt={alt} src={src} style={transformContainerStyle(currentImageIndex)}/>
        ))}
      </div>
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
