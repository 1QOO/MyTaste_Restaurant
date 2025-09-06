import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind.css'
import './app.css'
import Header from '/src/assets/header'
import Introduction from './assets/introduction'
import NavLinks from './assets/navlinks'
import BestSeller from './assets/bestseller'
import Offer from './assets/offer'
import Footer from './assets/footer'

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
