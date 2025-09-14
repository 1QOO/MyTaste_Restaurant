import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import Header from './layouts/header'
import Introduction from './layouts/introduction'
import NavLinks from './layouts/navlinks'
import BestSeller from './layouts/bestseller'
import Offer from './layouts/offer'
import Footer from './layouts/footer'

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