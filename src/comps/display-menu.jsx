import MenuCard from './menu-card.jsx'

const DisplayMenu = ()=>{
    const dishes = [
        {name : "Chicken Snitzel", price : "D 100.00"}, {name : "MyTaste Beef", price : "D 200.00"}, {name : "Heaven Soup", price : "D 300.00"}
    ]
    const baverages = [
        {name : "Blue Ocean", price : "D 100.00"}, {name : "Choco Dream", price : "D 200.00"}
    ]
    
    return(
    <section>
        <h1 className="bg-orange-800 py-[0.2rem] px-[1rem] mb-[0.2rem] text-white text-center font-sans">Menu</h1>
        <h2 className="bg-amber-300 py-[0.2rem] px-[1rem]">Dishes</h2>
        <div className='flex flex-col p-[1rem] gap-[1rem]'>
            {dishes.map((item)=>(<MenuCard item={item} classList="dish" key={item.name}/>))}
        </div>
        <h2 className="bg-amber-300 py-[0.2rem] px-[1rem]">Baverages</h2>
        <div className='flex flex-col p-[1rem] gap-[1rem]'>
            {baverages.map((item)=>(<MenuCard item={item} classList="baverages" key={item.name} />))}
        </div>
    </section>
    )
}

export default DisplayMenu;