import About from "./pages/about/about";
import Hotel from "./pages/hotel/hotel";
import RoomList from "./pages/room/room";
import LoginPage from "./pages/login/login-page";
import Register from "./pages/register/register";
import NotFound from "./pages/not-found/not-found";

export const routes = [
    {
        path: '',
        element: <About />
    },
    {
        path: 'a-propos',
        element: <About />
    },
    {
        path: 'hotels',
        element: <Hotel />
    },
    {
        path: 'chambres',
        element: <RoomList />   
    },
    {
        path: 'connexion',
        element: <LoginPage />    
    },
    {
        path: 'enregistrement',
        element: <Register />    
    },
    {
        path: '*',
        element: <NotFound />   
    }
]