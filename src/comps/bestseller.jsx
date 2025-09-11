export default function BestSeller(){

    return (
        <section className="mt-[1rem]">
            <h2 className="bg-amber-300 p-[0.5rem]">Try out best seller!</h2>
            <div className="flex justify-center p-[1rem] gap-[0.5rem]">
                {[chickenSnitzel, myTasteBeef].map((item)=>(
                    <div className="best_seller_dish p-[0.5rem] text-center max-w-[400px]" key={item.name}>
                        <img src={item.image} alt={item.alt} className="w-max" />
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </section>         
    )    
}

const chickenSnitzel = {
    name : "Chicken Snitzel",
    image : "/default_dish_img.jpeg",
    alt : "default_dish"
}

const myTasteBeef = {
    name : "MyTaste Beef",
    image : "/default_dish_img.jpeg",
    alt : "default_dish"
}