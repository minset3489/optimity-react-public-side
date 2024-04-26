import { NavLink } from "react-router-dom";
import useFetch from "../composables/useFetch";
import image1 from "./../assets/images/aboutus3.jpg";
import PropTypes from 'prop-types';

const AboutInfo = ({ navLink, title, lineClamp }) => {
    const aboutImage = image1;

    const {
        data: aboutdatas,
        isPending,
        error,
    } = useFetch("http://optimityback.htoomaungthait.xyz/about");

    return ( 
        <>
        <section className="text-center">
            {error && <div>{error}</div>}
            {isPending || !aboutdatas ? (
                <div>Loading...</div>
            ) : (
                <div>
                    { aboutdatas.map((aboutdata) => (
                        <div key={aboutdata.id}>
                        {title && <h3>{aboutdata.title}</h3>}
                        <div  className="place-content-center items-center flex flex-col lg:flex-row">
                            
                            <div className="w-full lg:w-6/12 md:mr-6 text-center lg:text-left">
                                
                                {aboutdata.description.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className={`mt-4 text-justify ${lineClamp ? 'line-clamp-6' : ''}`}>{paragraph}</p>
                                ))}
                                {navLink && <NavLink to="/about" className="mybutton ">More...</NavLink>}
                            </div>
                            <div className="w-full lg:w-6/12 pt-6 lg:pt-0">
                                <img className="shadow-md shadow-gray-600 rounded-lg" src={aboutImage} alt="" />
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
        </>
    );
}

AboutInfo.propTypes = {
    navLink: PropTypes.bool,
    title: PropTypes.bool,
    lineClamp: PropTypes.bool
};

export default AboutInfo;
