import { useParams, NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { backendBaseUrl } from '../../config/appConfig';

import useFetch from '../../composables/useFetch';


//Image Imports
import imageISP from "../../assets/images/solutions/ISP.jpg";
import imageSecurity from "../../assets/images/solutions/securitySolution.jpg";
import imageDataCenter from "../../assets/images/solutions/dataCenter.jpg";
import imageHyperConverged from "../../assets/images/solutions/hyperConverged.jpg";
import imageManagedITCloud from "../../assets/images/solutions/dataCloud.jpg";
import imageEndUserComputing from "../../assets/images/solutions/endUserCompu.png";
import imageEquipments from "../../assets/images/solutions/Equipment.png";

const SolutionDetails = () => {

    const { id } = useParams();
    const { data: solution, isPending, error } = useFetch(`${backendBaseUrl}/solutions/` + id);

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
        <section>
            {error && <div>{error}</div>}

            {isPending || !solution ? (
                <div>Loading...</div>
            ) : (<>
                <h1>{solution.title}</h1>
                
                <div className="p-6 md:p-10 bgcoralwhitepink">
                    <div className=' grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className="pt-6">
                            <img className="rounded-xl shadow-lg" src={getImage(solution.title)} alt="" />
                        </div>

                        <div className="pt-6">
                            <div className="font-semibold text-2xl underline text-center">Service Support</div>
                            {solution.solution_services.map((servicesupport, index) => (
                                <div key={index} className="text-left mt-4 md:mx-4">
                                    <div className="flex text-lg">
                                        <div><Icon className="text-green-500 mt-1" icon="material-symbols:check-circle-rounded" /></div>
                                        <div>{servicesupport.service_name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='text-center pt-8'>
                        <div className="font-semibold text-2xl underline text-center mb-4">Description</div>
                        {solution.description.split('\n\n').map((paragraph, index) => (
                            <>
                                <p key={index} className='text-justify text-xl font-medium'>{paragraph}</p>
                                <br />
                            </>
                        ))}
                        <NavLink to="/solutions" className="mybutton !w-full md:!w-auto text-center">Discover More</NavLink>
                    </div>
                    
                    
                </div>
                
                </>
            )}
        </section>
    );
}

export default SolutionDetails;
