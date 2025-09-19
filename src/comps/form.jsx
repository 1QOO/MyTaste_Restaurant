const ReservForm = ()=>{
    
    return (
        <section className="bg-amber-900 p-[1rem]">
            <fieldset className="text-white border-solid border-[0.2rem] rounded-[1rem] max-w-[600px] m-auto">
                <legend>Reserfation Form:</legend>
                <form className="p-[1.5rem]">
                    <label htmlFor="name">Name :</label><br />
                    <input type="text" name="name" id="name" className="bg-white w-full" /><br /><br />
                    <label htmlFor="email">Email :</label><br />
                    <input type="email" name="email" id="email" className="bg-white w-full" /><br /><br />
                    <label htmlFor="phone">Phone number :</label><br />
                    <input type="phone" name="phone" id="phone" className="bg-white w-full" /><br /><br />
                    <button type="submit" className="bg-amber-300 text-amber-900 font-bold p-[0.3rem] rounded-[0.3rem] mx-auto block">Submit</button><br />
                </form>
            </fieldset>
        </section>
    )
}

export default ReservForm;