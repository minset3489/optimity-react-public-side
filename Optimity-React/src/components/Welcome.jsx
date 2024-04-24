import './Welcome.css'
import welcomeimage from "./../assets/images/WelcomeImg.jpg"
import { NavLink } from "react-router-dom";
import useFetch from "../composables/useFetch";

const Welcome = () => {
    const {
        data: welcome,
        isPending,
        error,
    } = useFetch("http://localhost:3000/welcome");

    const welcomeImage = welcomeimage;

    return (
        <section>
            {error && <div>{error}</div>}
            {isPending || !welcome ? (
                <div>Loading...</div>
            ) : (
                welcome.map((data) => (
                    <div key={data.id} className="flex flex-col md:flex-row place-items-center text-white gap-4">
                        <div className="md:w-3/5 md:mr-4 text-center md:text-justify drop-shadow-lg">
                            <div className="mb-3 text-6xl font-semibold">{data.title}</div>
                            <p>{data.description}</p> 
                            <NavLink to="/contact" className="mybutton">Contact Us</NavLink>
                        </div>
                        <div className="w-auto md:w-2/5">
                            <div className="imageback">
                                <img className="z-50" src={welcomeImage} alt="welcome" />
                            </div>
                        </div>
                    </div> 
                ))
            )}
        </section>
    );
}

export default Welcome;
