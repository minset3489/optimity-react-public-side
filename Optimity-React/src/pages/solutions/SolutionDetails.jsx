import { useParams, NavLink } from 'react-router-dom';
import useFetch from '../../composables/useFetch';
import { Icon } from '@iconify/react';
import imageISP from "../../assets/images/ISP.jpg";

const SolutionDetails = () => {
    const image1 = imageISP;
    const { id } = useParams();
    const { data: solution, isPending, error } = useFetch('http://optimityback.htoomaungthait.xyz/solutions/' + id);

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
                            <img className="rounded-xl shadow-lg" src={image1} alt="" />
                        </div>

                        <div className="pt-6">
                            <div className="font-semibold text-2xl underline text-center">Service Support</div>
                            {solution.servicesupport.map((servicesupport, index) => (
                                <div key={index} className="text-left mt-4 md:mx-4">
                                    <div className="flex text-lg">
                                        <div><Icon className="text-green-500 mt-1" icon="material-symbols:check-circle-rounded" /></div>
                                        <div>{servicesupport}</div>
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
