import Header from '../layouts/header'
import Introduction from '../layouts/introduction'
import NavLinks from '../layouts/navlinks'
import BestSeller from '../layouts/bestseller'
import Offer from '../layouts/offer'
import Footer from '../layouts/footer'

const Home = ()=>{
  return (
    <>
      <Header />
      <Introduction />
      <NavLinks />
      <BestSeller />
      <Offer />
      <Footer />
    </>
  )
}

export default Home;