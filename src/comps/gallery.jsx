import { useState } from "react";
import tables from "../utils/table";
import '../utils/gallery.css';

//IMAGE POSITION FOR INFINITE CAROUSEL
const carouselState = [
    {transform: "translateX(calc(40vw * -2)) scale(0.8)", duration : "0.5s", center: false, pos: "corner-left"},
    {transform: "translateX(calc(40vw * -1)) scale(0.8)", duration : "0.5s", center: false},
    {transform: "translateX(calc(40vw * 0)) scale(1)", duration : "0.5s", center: true},
    {transform: "translateX(calc(40vw * 1)) scale(0.8)", duration : "0.5s", center: false},
    {transform: "translateX(calc(40vw * 2)) scale(0.8)", duration : "0.5s", center: false, pos: "corner-right"},
]

const Gallery = ()=>{
    const [active, setActive] = useState(carouselState);
    const images = [...tables];

    const handleSlideLeft = ()=>{
        setActive((prevState)=>{
            const newState = prevState.map((item)=>{
                if(item.pos) item.pos==="corner-left"?item.duration="0s":item.duration="0.5s";
                return item;
            });
            const flippedItem = newState.shift();
            newState.push(flippedItem);

            return [...newState];
        })
    }
    const handleSlideRight = ()=>{
        setActive((prevState)=>{
            const newState = prevState.map((item)=>{
                if(item.pos) item.pos==="corner-right"?item.duration="0s":item.duration="0.5s";
                return item;
            });
            const flippedItem = newState.pop();
            newState.unshift(flippedItem);

            return [...newState];
        })
    }

    return (
        <div className="text-center bg-amber-900 min-h-[60vw] text-amber-300 relative h-[100px]">
            <h2>Table for reservation</h2>
            <div className="flex justify-center items-center h-[60vw] overflow-clip mask-x-from-70% mask-x-to-90%">
                <Images active={active} images={images} />
            </div>
            <button className="text-amber-900 font-bold bg-amber-300 px-[0.5rem] absolute left-[0.5rem] top-[50%]" onClick={handleSlideLeft}>&lt;</button>
            <button className="text-amber-900 font-bold bg-amber-300 px-[0.5rem] absolute right-[0.5rem] top-[50%]" onClick={handleSlideRight}>&gt;</button>
            <div className="m-auto py-1">
            </div>
        </div>
    )
}

const Images = ({active, images})=>{
    const style = "image-card shrink-0 text-center w-[40vw] absolute";

    return (
        <div className="carousel-wrapper w-[40vw] h-[40vw] relative">

            {
            images.map((item,i)=>{
                return (
                    <div key={i+1} id={`gallery-${i}img`} className={style} style={{
                        "--transform": active[i].transform,
                        "--width": active[i].center?"40vw":"30vw",
                        "--duration": active[i].duration,
                    }} >
                        <img src={item.img} alt={item.alt} className="size-full" />
                        <span>{item.name}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Gallery;