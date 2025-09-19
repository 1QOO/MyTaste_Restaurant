import OrderMenu from "../layouts/orderMenu";
import Footer from "../layouts/footer";

const Menu = ()=>{
    return (
        <>
            <header>
                <h1 className="bg-orange-800 py-[0.2rem] px-[1rem] mb-[0.2rem] text-white text-center font-sans">Menu</h1>
            </header>
            <OrderMenu />
            <Footer />
        </>
    )
}

export default Menu;