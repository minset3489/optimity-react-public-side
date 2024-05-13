import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { backendBaseUrl } from "../../config/appConfig";

import useFetch from "../../composables/useFetch";

//Image Imports
import imageISP from "../../assets/images/solutions/ISP.jpg";
import imageSecurity from "../../assets/images/solutions/securitySolution.jpg";
import imageDataCenter from "../../assets/images/solutions/dataCenter.jpg";
import imageHyperConverged from "../../assets/images/solutions/hyperConverged.jpg";
import imageManagedITCloud from "../../assets/images/solutions/dataCloud.jpg";
import imageEndUserComputing from "../../assets/images/solutions/endUserCompu.png";
import imageEquipments from "../../assets/images/solutions/Equipment.png";

const Solutions = () => {
    
    const { data: solutions, isPending, error } = useFetch(`${backendBaseUrl}/solutions`);

    const getImage = (title) => {
        switch(title) {
            case "Telco & ISP Solutions":
                return imageISP;
            case "Data Center Solution":
                return imageDataCenter;
            case "Hyper Converged Solution":
                return imageHyperConverged;
            case "Security Solutions":
                return imageSecurity;
            case "End-user Computing":
                return imageEndUserComputing;
            case "Managed IT & Cloud Services":
                return imageManagedITCloud;
            case "Enterprise Office Network & End-user Equipment's Supplies":
                return imageEquipments;
            default:
                return null;
        }
    }

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
                            <img className="rounded-xl shadow-lg" src={getImage(solution.title)} alt="" />
                        </div>
                        <div className="mt-6">
                            <h4 className="underline mb-4">Service Support</h4>
                            {solution.solution_services.map((servicesupport, index) => (
                                <div className="flex text-lg text-left" key={index}>
                                    <div>
                                        <Icon
                                            className="text-green-500 mr-1 mt-1"
                                            icon="mdi:tick-circle"
                                        />
                                    </div>
                                    {servicesupport.service_name}
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