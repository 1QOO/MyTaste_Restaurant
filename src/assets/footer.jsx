export default function Footer(){
    return (
        <footer className="bg-orange-800 w-[100vw] p-[1rem] text-white">
            <span>Follow our social media :</span>
            <table>
                <tr>
                    <td><img src="/insta_logo.png" className="logo" /></td>
                    <td>mytaste@insta</td>
                </tr>
                <tr>
                    <td><img src="/x_logo.png" className="logo" /></td>
                    <td>mytaste@x</td>
                </tr>
                <tr>
                    <td><img src="/facebook_logo.png" className="logo" /></td>
                    <td>mytaste@facebook</td>
                </tr>
            </table>
        </footer>
    )
}