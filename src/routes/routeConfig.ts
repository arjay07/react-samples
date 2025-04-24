import ImageCarouselView from "../views/ImageCarouselView";
import ImageCarouselViewII from "../views/ImageCarouselViewII";

export type RouteConfig = {
    label: string;
    path: string;
    component: React.FC;
};

export const routes: RouteConfig[] = [
    {
        label: "Image Carousel",
        path: "/image-carousel",
        component: ImageCarouselView,
    },
    {
        label: "Image Carousel II",
        path: "/image-carousel-ii",
        component: ImageCarouselViewII,
    }
].sort((a, b) => a.label.localeCompare(b.label));
