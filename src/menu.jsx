import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './tailwind.css'
import './app.css'
import DisplayMenu from "./comps/display-menu";
import Footer from "./comps/footer";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <DisplayMenu />
        <Footer />
    </StrictMode>
)