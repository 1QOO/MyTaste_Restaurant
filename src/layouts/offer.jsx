export default function Offer(){
    return (
        <section>
            <h2 className="bg-amber-300 p-[0.5rem]">Or take our limited offer!</h2>
            <div className="flex p-[1rem] justify-center">
                <div className="shadow-[0_0_5px_1px_gray] flex-initial text-center rounded-[10px] p-[0.5rem] w-fit">
                    <img src="/default_dish_img.jpeg" alt="offer" className="m-auto" />
                    <span>30% Discount for 2 MyTaste Beef</span>
                </div>
            </div>
        </section>
    )
}