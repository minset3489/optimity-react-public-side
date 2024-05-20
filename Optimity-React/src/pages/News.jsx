import { NavLink } from "react-router-dom";
import useFetch from "../composables/useFetch";
import newsImage from "./../assets/images/News.png";

import Services from '../components/Services';
import Vacancy from "../components/Vacancy";
import PartnerLogos from "../components/PartnerLogos";
import { backendBaseUrl } from "../config/appConfig";

const News = () => {

    const image1= newsImage;

    const {
        data: news,
        isPending,
        error,
    } = useFetch(`${backendBaseUrl}/news`);

    return ( <>
    <section className="text-white">
        <h1>News</h1>
        {error && <div>{error}</div>}
        {isPending || !news ? <div>Loading...</div> : 
        <div>
            {news.map((data) => (
                <div key={data.id} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="text-center md:text-left">
                        <h4 className="text-3xl pb-4">{data.title}</h4>
                        <p >{data.description}</p>
                        <NavLink className="mybutton" to={data.linkUrl}>See Details</NavLink>
                    </div>
                    <div>
                        <img className="shadow-md shadow-gray-600 rounded-lg" src={image1} alt="News Image"/>
                    </div>
                </div>
            ))}
        </div>}

        <Services/>

        <Vacancy/>
    </section>
    <section className="!py-0 !my-0">
        <PartnerLogos/>
    </section>
    </> );
}
 
export default News;