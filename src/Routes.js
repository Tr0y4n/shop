import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, ABOUT_ROUTE, PROMOTION_ROUTE, MAIN_ROUTE, KATALOG_ROUTE } from "./Utils/Consts";
import AdminPage from "./pages/AdminPage/AdminPage";
import BasketPage from "./pages/BasketPage/BasketPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import DevicePage from "./pages/DevicePage/DevicePage";
import PromotionPage from "./pages/PromotionPage/PromotionPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    }, 
    {
        path: BASKET_ROUTE,         // мб его в public
        Component: BasketPage
    }
];

export const publicRoutes = [ 
    {
        path: KATALOG_ROUTE,
        Component: ShopPage
    }, 
    {
        path: LOGIN_ROUTE,
        Component: LoginPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: LoginPage
    }, 
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
    {
        path: PROMOTION_ROUTE,
        Component: PromotionPage
    },
    {
        path: ABOUT_ROUTE,
        Component: AboutPage
    },
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
];