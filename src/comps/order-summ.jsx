import { useState } from "react";

const OrderSumm =({orderSum, confirmOrder})=>{
    const [orderDetail, setOrderDetail] = useState(false);
    const totalAmount = orderSum.map(x=>x.qtt*x.price).reduce((x,y)=>x+y,0);

    const toggleOrderDetail = ()=>{
        if(orderSum.length===0) return 0;
        setOrderDetail(prevVal=>!prevVal);
    }

    return (
        <div className="sticky bottom-0 p-1.5 bg-amber-100 w-[90vw] m-auto border-amber-200 border-4 border-b-0 rounded-t-lg">
            <ActionButtons toggleOrderDetail={toggleOrderDetail} confirmOrder={confirmOrder} />
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="text-left">Total Order</th>
                        <th className="text-right" colSpan="2">{`$ ${totalAmount}`}</th>
                    </tr>
                </thead>
                <OrderDetail orderSum={orderSum} showDetail={orderDetail}/>
            </table>
        </div>
    )
}

const OrderDetail = ({orderSum, showDetail})=>{
    const show = showDetail?"text-[1rem]":"text-[1rem]  hidden"
    return (
        <tbody className={show}>
        {orderSum.map((item)=>{
            return(
                <tr key={item.name}>
                    <td className="border-solid border-amber-700 border-t-1">{item.name}</td>
                    <td className="border-solid border-amber-700 border-t-1">{item.qtt}</td>
                    <td className="border-solid border-amber-700 border-t-1 text-right">{"$ "+item.price*item.qtt}</td>
                </tr>
            )
        })}
        </tbody>
    )
}

const ActionButtons = ({toggleOrderDetail, confirmOrder})=>{
    return (
        <div>
            <button className="rounded-full px-2 bg-amber-300 text-amber-800" onClick={toggleOrderDetail}>Show detail</button>
            <button className="rounded-full px-2 bg-amber-300 text-amber-800" onClick={confirmOrder}>Confirm order</button>
        </div>
    )
}

export default OrderSumm;