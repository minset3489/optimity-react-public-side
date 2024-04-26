import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import useFetch from "../../composables/useFetch";
import imageISP from "../../assets/images/ISP.jpg";

const Solutions = () => {
    const image1 = imageISP;
    const { data: solutions, isPending, error } = useFetch("http://localhost:3000/solutions");

    return (
        <>
            {error && <div>{error}</div>}

            {isPending || !solutions ? (
                <div>Loading...</div>
            ) : (
                <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solutions.map((solution) => (
                    <div className="bgcoralwhitepink p-6 mt-6 text-center" key={solution.id}>
                        <div className="">
                            <h4 className="mb-4">{solution.title}</h4>
                            <img className="rounded-xl shadow-lg" src={image1} alt="" />
                        </div>
                        <div className="mt-6">
                            <h4 className="underline mb-4">Service Support</h4>
                            {solution.servicesupport.map((servicesupport, index) => (
                                <div className="flex text-lg text-left" key={index}>
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
                                className=" text-center w-full inline-block mt-4 px-4 py-2 font-bold !text-green-600 hover:underline transition duration-300"
                                to={`/solutions/${solution.id}`}
                            >
                                Explore Details...
                            </NavLink>
                        </div>
                    </div>
                ))}
                </div>
                </>
            )
            }
        </>
    );
}

export default Solutions;