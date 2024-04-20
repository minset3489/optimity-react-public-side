import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import useFetch from "../composables/useFetch";
import imageISP from "./../assets/images/ISP.jpg";

const Solutions = () => {
    const image1 = imageISP;
    const {
        data: solutions,
        isPending,
        error,
    } = useFetch("http://localhost:3000/solutions");

    return (
        <section className="text-white">
            <h1>Benefits We Offer</h1>

            {error && <div>{error}</div>}

            {isPending || !solutions ? (
                <div>Loading...</div>
            ) : (
                solutions.map((solution, index) => (
                    <div className={`flex flex-col md:flex-row bgcoralwhitepink my-8 p-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`} key={solution.id}>
                        <div className="w-full md:w-9/12">
                            <h2 className="mb-4">{solution.title}</h2>
                            <img className="rounded-md shadow-md" src={image1} alt="" />
                        </div>
                        <div className="w-full md:w-3/12 md:mb-auto m-6">
                            <h4 className="text-center items-center pb-8 mt-8 md:mt-auto">Service Support</h4>
                            {solution.servicesupport.map((servicesupport, index) => (
                                <div className="flex text-lg" key={index}>
                                    <div>
                                        <Icon
                                            className="text-green-500 mr-1 mt-1"
                                            icon="mdi:tick-circle"
                                        />
                                    </div>
                                    {servicesupport}
                                </div>
                            ))}
                            <NavLink
                                className="text-right w-full inline-block mt-4  px-4 py-2 hover:text-green-500 hover:underline transition duration-300"
                                to="/services"
                            >
                                See Details...
                            </NavLink>
                        </div>
                    </div>
                ))
            )}
        </section>
    );
}

export default Solutions;
