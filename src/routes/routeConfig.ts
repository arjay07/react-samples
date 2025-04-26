import ImageCarouselView from "../views/ImageCarouselView";
import ImageCarouselViewII from "../views/ImageCarouselViewII";
import JobBoardView from "../views/JobBoardView";

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
        label: "Image Carousel II (Animated)",
        path: "/image-carousel-ii",
        component: ImageCarouselViewII,
    },
    {
        label: "Job Board",
        path: "/job-board",
        component: JobBoardView,
    }
].sort((a, b) => a.label.localeCompare(b.label));
