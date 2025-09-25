import { useState } from "react";
import tables from "../utils/table";
import '../utils/gallery.css';

//IMAGE POSITION FOR INFINITE CAROUSEL
const carouselState = [
    {transform: "translateX(calc(100% * -2)) scale(0.6)", duration : "0.5s", center: false, pos: "corner-left"},
    {transform: "translateX(calc(100% * -1)) scale(0.6)", duration : "0.5s", center: false},
    {transform: "translateX(calc(100% * 0)) scale(1)", duration : "0.5s", center: true},
    {transform: "translateX(calc(100% * 1)) scale(0.6)", duration : "0.5s", center: false},
    {transform: "translateX(calc(100% * 2)) scale(0.6)", duration : "0.5s", center: false, pos: "corner-right"},
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
        <div className="text-center bg-amber-900 text-amber-300 relative">
            <h2>Table for reservation</h2>
            <div className="flex justify-center items-center overflow-clip m-auto mask-x-from-70% mask-x-to-90% md:lg:w-[50%]">
                <Images active={active} images={images} />
            </div>
            <button className="
                text-amber-900 font-bold bg-amber-300 px-[0.5rem] absolute left-[0.5rem] md:lg:left-[20%] top-[50%] 
                md:lg:right-[20%] md:lg:rounded-full md:lg:size-[40px] md:lg:text-2xl" 
                onClick={handleSlideLeft}>&lt;
            </button>
            <button className="
                text-amber-900 font-bold bg-amber-300 px-[0.5rem] absolute right-[0.5rem] top-[50%] 
                md:lg:right-[20%] md:lg:rounded-full md:lg:size-[40px] md:lg:text-2xl
                "
                onClick={handleSlideRight}>&gt;
            </button>
            <div className="m-auto py-1">
            </div>
        </div>
    )
}

const Images = ({active, images})=>{
    const style = "image-card shrink-0 text-center size-fit realtive";

    return (
        <div className="carousel-wrapper size-fit relative">

            {
            images.map((item,i)=>{

                return (
                    <div key={i+1} id={`gallery-${i}img`} className={style} style={{
                        "--transform": active[i].transform,
                        "--duration": active[i].duration,
                        "--position": active[i].center?"relative":"absolute",
                    }} >
                        <img src={item.img} alt={item.alt} className="size-[120px] md:size-[240px]" />
                        <span>{item.name}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Gallery;