import { Link } from "react-router-dom"

export default function NavLinks(){
    return (
        <nav className="bg-orange-800 w-[100vw]">
            <ul className="p-[1rem] md:lg:p-[2rem] flex justify-center md:lg:justify-evenly w-[100%] gap-[1rem]">
                <Link to="menu" className="grow-1 basis-1 max-w-[150px] p-[1rem] text-center bg-amber-300 rounded-full md:lg:font-bold hover:cursor-pointer hover:bg-amber-200"><a href="/../menu.html">Menu</a></Link>
                <Link to="reservation" className="grow-1 basis-1 max-w-[150px] p-[1rem] text-center bg-amber-300 rounded-full md:lg:font-bold hover:cursor-pointer hover:bg-amber-200"><a href="/../reservation.html">Reservation</a></Link>
            </ul>
        </nav>
    )
}