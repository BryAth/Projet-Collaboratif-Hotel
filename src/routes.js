import About from "./pages/about/about";
import Hotel from "./pages/hotel/hotel";
import RoomList from "./pages/room/room";
import LoginPage from "./pages/login/login-page";
import RegisterPage from "./pages/register/register-page";
import NotFound from "./pages/errors/not-found";

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
    // {
    //     path: 'description/:id',
    //     element: <RoomDescription />   
    // },
    {
        path: 'connexion',
        element: <LoginPage />    
    },
    {
        path: 'enregistrement',
        element: <RegisterPage />    
    },
    {
        path: '*',
        element: <NotFound />   
    }
]