import Header from "../layouts/header";
import ReservMain from "../layouts/reservationMain";
import Gallery from "../comps/gallery";
import ReservForm from "../comps/form";
import Footer from "../layouts/footer";

const Reservation = ()=>{
    return (
        <>
            <Header />
            <ReservMain />
            <Gallery />
            <ReservForm />
            <Footer />
        </>
    )
}

export default Reservation;