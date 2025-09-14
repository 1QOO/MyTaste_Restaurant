import { React, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './app.css';
import Header from "./layouts/header";
import ReservMain from "./layouts/reservationMain";
import Gallery from "./comps/gallery";
import ReservForm from "./comps/form";
import Footer from "./layouts/footer";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Header />
        <ReservMain />
        <Gallery />
        <ReservForm />
        <Footer />
    </StrictMode>
)