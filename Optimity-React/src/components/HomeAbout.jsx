import image1 from "./../assets/images/aboutus1.jpg"

import { NavLink } from "react-router-dom";

const HomeAbout = () => {

    const aboutdatas = [{
        id: "1",
        title: "We'll Help You Solve Problems",
        description : "Optimity is a vendor-neutral System Integrator specialized in delivering value through innovative Information and Communication Technology (ICT) solutions. Our aim is to simplify and elevate IT planning, implementation, and management processes. Founded by experienced engineers with diverse ICT backgrounds, our strength resides in our exceptional leadership and operational team. With extensive experience across sectors like healthcare, banking, finance, we are Solution Providers specializing in designing, implementing, and consulting on network and system infrastructure products, technologies, and solutions. This positions us uniquely to harness our knowledge and expertise in providing tailored, comprehensive infrastructure solutions that meet our customers’ distinct needs.",
        imageUrl : image1
    }]

    return ( <>        
        { aboutdatas.map((aboutdata)=>(
        <section className="place-content-center items-center text-center flex flex-col lg:flex-row" key={aboutdata.id}>
            <div className="w-full lg:w-1/2 lg:mr-4 text-center lg:text-justify">
                <h3 className="md:!text-left">{aboutdata.title}</h3>
                <p className=" line-clamp-6 mt-4">{aboutdata.description}</p>
                <NavLink to="/about" className="mybutton">More...</NavLink>
            </div>
            <div className="w-full lg:w-1/2 pt-6 lg:pt-0 shadow-lg shadow-slate-500">
                <img className="rounded-lg" src={aboutdata.imageUrl} alt="" />
            </div>
        </section>
        ))}
    </> );
}
 
export default HomeAbout;