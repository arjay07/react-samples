import React from "react";
import ImageCarouselII from "../components/ImageCarouselII";

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
        <a className="btnLink" href="https://www.greatfrontend.com/interviews/study/amazon/questions/user-interface/image-carousel-ii/react" target="_blank" rel="noopener noreferrer">
          Open Challenge on GreatFrontEnd: <span className="fw-bold">Image Carousel II</span>
        </a>
      </div>
      <ImageCarouselII images={images} />
    </>;
};

export default ImageCarouselView;
