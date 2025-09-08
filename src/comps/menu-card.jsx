import { useState } from "react";

const MenuCard = ({item, classList})=>{
    const [count, setCount] = useState(0);

    return(
        <div className={classList+" shadow-[0_0_3px_1px_gray] p-[0.2rem]"}>
            <img className="w-sm" src="/default_dish_img.jpeg" />
            <h2>{item.name}</h2>
            <div>
                <button onClick={ ()=>count && setCount(count=>count-1)}>-</button>
                <span>{count}</span>
                <button onClick={()=>setCount(count=>count+1)}>+</button>
            </div>
            <span>{item.price}</span>
        </div>
    )
}

export default MenuCard;