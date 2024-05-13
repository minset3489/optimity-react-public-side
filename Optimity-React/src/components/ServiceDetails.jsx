import { useParams, NavLink } from 'react-router-dom';
import { backendBaseUrl } from '../config/appConfig';

import useFetch from '../composables/useFetch';

// Image Imports
import imageDI from "../assets/images/services/DandI.png"
import imageOperationMain from "../assets/images/services/OperationMaintenance.png"
import imageConsultationsforBusi from "../assets/images/services/ConsultationsforBusinessProcess.png"
import imageb2b from "../assets/images/services/b2b.png"
import imagefieldEngineer from "../assets/images/services/fieldEngineer.jpg"
import imagecorporateTraining from "../assets/images/services/corporateTraining.jpg"


const ServiceDetails = () => {


    const { id } = useParams();
    const { data: service, isPending, error } = useFetch(`${backendBaseUrl}/services/` + id);

    const getImage = (title) => {
        switch(title) {
            case "Design and Implementation of IT Solution":
                return imageDI;
            case "Operation, Maintenance & Managed Services":
                return imageOperationMain;
            case "Consultations for Business Process Transformation":
                return imageConsultationsforBusi;
            case "B2B Professional Services for International Partners":
                return imageb2b;
            case "Field Engineering Services for International Telco and ISPs":
                return imagefieldEngineer;
            case "Next-Level Corporate Training Services":
                return imagecorporateTraining;
            default:
                return null;
        }
    }

    return ( <>

    <section>
    {error && <div>{error}</div>}

    {isPending || !service ? (
    <div>Loading...</div>
    ) : (<>

    <div className="p-6 md:p-10 bgcoralwhitepink">
    
        <div className='grid gird-col-1 md:grid-cols-2 gap-8'>
            <div className=' place-items-center text-center place-content-center'>
            <div className="!font-light text-3xl md:!text-4xl lg:!text-5xl underline md:no-underline text-center mb-4">We can help you with</div>
            <div className='mb-4 text-xl md:underline'>{service.title}</div>
                {service.description.split('\n\n').map((paragraph, index) => (
                    <>
                        <p key={index} className='text-justify text-base md:text-xl font-medium'>{paragraph}</p>
                        <br />
                    </>
                ))}
                <NavLink to="/news" className="mybutton !w-full hidden md:block md:!w-auto text-center">Explore Further</NavLink>
            </div>
            <div className="pt-6">
                <img className="rounded-xl shadow-lg" src={getImage(service.title)} alt="" />
                <NavLink to="/news" className="mybutton !w-full block md:hidden md:!w-auto text-center">Explore Further</NavLink>
            </div>
            
            

        </div>
        
        
        
    </div>

    </>
    )}
    </section>

    </> );
}
 
export default ServiceDetails;