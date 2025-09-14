import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './app.css'
import OrderMenu from "./layouts/orderMenu";
import Footer from "./layouts/footer";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <OrderMenu />
        <Footer />
    </StrictMode>
)