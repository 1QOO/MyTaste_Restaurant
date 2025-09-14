import { useState } from 'react';
import MenuCard from '../comps/menu-card.jsx'
import OrderSumm from '../comps/order-summ.jsx'
import { dishes, drinks } from '../data/menu.js';

const OrderMenu = ()=>{
    const [dishesOrder, setDishesOrder] = useState(dishes);
    const [drinksOrder, setDrinksOrder] = useState(drinks);
    const [orderSum, setOrderSum] = useState([]);
    const [orderIsConfirmed, setOrderIsConfirmed] = useState(false);

    const updateOrderSum = (order) => {
        setOrderSum((prevOrderSum) => {
            const updatedOrder = [...prevOrderSum];
            let notIncluded = true;
    
            for (let item of updatedOrder) {
                if (item.name === order.name) {
                    notIncluded = false;
                    return updatedOrder.map(item =>
                        item.name === order.name ? { ...item, qtt: order.qtt } : item
                    );
                }
            }
    
            if(notIncluded) updatedOrder.push(order);
    
            return updatedOrder;
        });
    };    
    const updateDishOrder = (order)=>{
        updateOrderSum(order);
        setDishesOrder((prevOrder)=>{
            return prevOrder.map((item)=>{
                return item.name===order.name?{...item, qtt : order.qtt}:item;
            })
        })
    }
    const updateDrinkOrder = (order)=>{
        updateOrderSum(order);
        setDrinksOrder((prevOrder)=>{
            return prevOrder.map((item)=>{
               return item.name===order.name?{...item, qtt : order.qtt}:item;
            })
        })
    }
    const confirmOrder = ()=>{
        if(orderSum.length===0) return 0;
        setDishesOrder(dishes);
        setDrinksOrder(drinks);
        setOrderSum([]);
        setOrderIsConfirmed(prevVal=>{
            document.body.style.overflow = "hidden";
            return !prevVal
        });
    }
    
    return(
    <main className="text-[1.2rem]">
        {orderIsConfirmed && <button className='fixed z-10 w-full h-full bg-[rgba(0,0,0,0.3)] font-bold text-white' 
        onClick={()=>setOrderIsConfirmed(prevVal=>{
            document.body.style.overflow = "";
            return !prevVal
        })}>Order is confirmed</button>}
        <h1 className="bg-orange-800 py-[0.2rem] px-[1rem] mb-[0.2rem] text-white text-center font-sans">Menu</h1>
        <h2 className="bg-amber-300 py-[0.2rem] px-[1rem] text-amber-900">Dishes</h2>
        <div className='flex flex-col p-[1rem] gap-[1rem]'>
            <MenuList menuList={dishesOrder} classList={dishes} updateOrder={updateDishOrder} />
        </div>
        <h2 className="bg-amber-300 py-[0.2rem] px-[1rem] text-amber-900">Beverages</h2>
        <div className='flex flex-col p-[1rem] gap-[1rem]'>
            <MenuList menuList={drinksOrder} classList={drinks} updateOrder={updateDrinkOrder} />
        </div>
        <OrderSumm orderSum={orderSum} confirmOrder={confirmOrder}/>
    </main>
    )
}

const MenuList = ({menuList, classList, updateOrder})=>{
    return (
        menuList.map((item)=>(
        <MenuCard 
            name={item.name} 
            price={item.price} 
            qtt={item.qtt} 
            updateOrder={updateOrder} 
            classList={classList}
            key={item.name}
        />))
    )
}

export default OrderMenu;