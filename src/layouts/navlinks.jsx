export default function NavLinks(){
    return (
        <nav className="bg-orange-800 w-[100vw]">
            <ul className="p-[1rem] md:lg:p-[2rem] flex justify-center md:lg:justify-evenly w-[100%] gap-[1rem]">
                <li className="bg-amber-300 rounded-full md:lg:font-bold hover:cursor-pointer hover:bg-amber-200"><a href="/../order-menu.html">Menu</a></li>
                <li className="bg-amber-300 rounded-full md:lg:font-bold hover:cursor-pointer hover:bg-amber-200"><a href="/../reservation.html">Reservation</a></li>
            </ul>
        </nav>
    )
}