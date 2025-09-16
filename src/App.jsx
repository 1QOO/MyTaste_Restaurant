import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./pages/nav";
import Home from './pages/home';
import Menu from './pages/menu';
import Reservation from './pages/reservation';

export default function App() {
    return (
        <Router>
            <NavLinks />
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservation" element={<Reservation />} />
            </Routes>
        </Router>
    );
}