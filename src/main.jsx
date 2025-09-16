import { createRoot } from "react-dom/client";
import Home from './pages/home';
import Menu from './pages/menu';
import Reservation from './pages/reservation';
import './app.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/menu", element: <Menu />},
    {path:"/reservation", element: <Reservation />}
])

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);