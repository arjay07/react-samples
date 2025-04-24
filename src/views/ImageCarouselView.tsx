import React from "react";
import ImageCarousel from "../components/ImageCarousel";

const images = [
    {
      src: "https://picsum.photos/id/600/600/400",
      alt: "Forest",
    },
    {
      src: "https://picsum.photos/id/100/600/400",
      alt: "Beach",
    },
    {
      src: "https://picsum.photos/id/200/600/400",
      alt: "Yak",
    },
    {
      src: "https://picsum.photos/id/300/600/400",
      alt: "Hay",
    },
    {
      src: "https://picsum.photos/id/400/600/400",
      alt: "Plants",
    },
    {
      src: "https://picsum.photos/id/500/600/400",
      alt: "Building",
    },
  ];
const ImageCarouselView: React.FC = () => {
    return <>
      <div className="referenceLink">
        <a className="btnLink" href="https://www.greatfrontend.com/questions/user-interface/image-carousel" target="_blank" rel="noopener noreferrer">
          Open Challenge on GreatFrontEnd: <span className="fw-bold">Image Carousel</span>
        </a>
      </div>
      <ImageCarousel images={images} />
    </>;
};

export default ImageCarouselView;
