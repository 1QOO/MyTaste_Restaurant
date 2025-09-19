export default function Introduction(){
    return (
        <main className="p-[1rem] md:lg:p-[1.5rem] w-full flex justify-center  gap-[1rem] flex-col lg:flex-row items-center">
            <img src="/mytaste_photo.png" alt="MyTaste_restaurant" className="w-full max-w-[620px]"/>
            <div className="py-[3rem] md:lg:py-[0px] self-stretch">
                <h1 className="text-6xl mb-[1rem]">MyTaste Restaurant</h1>
                <p className="text-2xl">
                    Welcome to MyTaste - where every dish is made with passion and flavor to bring you comfort and delight. We combine fresh ingredients, authentic recipes, 
                    and warm atmosphere to create meals that satisfy both heart and appetit. At MyTaste, we believe great food is meant to be shared, enjoyed, and remembered.
                </p>
            </div>
        </main>
    )
}