
const MenuCard = ({name, price, qtt, classList, updateOrder})=>{

    const handleIncrement = ()=>{
        updateOrder({name: name, price: price, qtt: qtt+1});
    }
    const handleDecrement = ()=>{
        if(qtt === 0) return 0;
        updateOrder({name: name, price: price, qtt: qtt-1});
    }

    return(
        <div className={classList+" shadow-[0_0_3px_1px_gray] p-[0.2rem]"}>
            <img className="w-sm" src="/default_dish_img.jpeg" />
            <h2>{name}</h2>
            <div className="flex justify-between">
                <span>{"$ "+price}</span>
                <div className="text-amber-700 p-1">
                    <button className=" bg-amber-300 rounded-full mr-[1rem] font-bold px-2" onClick={handleDecrement}>-</button>
                    <button className=" bg-amber-300 rounded-full font-bold px-2" onClick={handleIncrement}>+</button>
                </div>
            </div>
            <div className="bg-orange-800 px-[1rem] flex justify-between text-white">
                <span>{qtt}</span>
                    <span>{"$ "+(price*qtt)}</span>
            </div>
        </div>
    )
}

export default MenuCard;