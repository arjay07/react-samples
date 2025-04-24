import ImageCarouselView from "../views/ImageCarouselView";

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
    }
].sort((a, b) => a.label.localeCompare(b.label));
