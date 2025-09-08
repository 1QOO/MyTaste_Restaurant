import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind.css'
import './app.css'
import Header from './comps/header'
import Introduction from './comps/introduction'
import NavLinks from './comps/navlinks'
import BestSeller from './comps/bestseller'
import Offer from './comps/offer'
import Footer from './comps/footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Introduction />
    <NavLinks />
    <BestSeller />
    <Offer />
    <Footer />
  </StrictMode>,
)