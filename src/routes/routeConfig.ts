import ImageCarouselView from "../views/ImageCarouselView";
import ImageCarouselViewII from "../views/ImageCarouselViewII";
import ModalDialogView from "../views/ModalDialogView";
import TicTacToeView from "../views/TicTacToeView";

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
        label: "Tic Tac Toe",
        path: "/tic-tac-toe",
        component: TicTacToeView,
    },
    {
        label: "Modal Dialog",
        path: "/modal-dialog",
        component: ModalDialogView,
    }
].sort((a, b) => a.label.localeCompare(b.label));
