const ReservForm = ()=>{
    
    return (
        <fieldset>
            <legend>Reserfation Form:</legend>
            <form>
                <label for="name">Name :</label>
                <input type="text" name="name" id="name" />
                <label for="email">Email :</label>
                <input type="email" name="email" id="email" />
                <label for="phone">Phone number :</label>
                <input type="phone" name="phone" id="phone" />
                <submit>Submit</submit>
            </form>
        </fieldset>
    )
}

export default ReservForm;