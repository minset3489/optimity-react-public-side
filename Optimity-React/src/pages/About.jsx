import AboutInfo from "../components/AboutInfo";
import Testimonials from "../components/Testimonials";
import VisionMission from "../components/VisionMission";
import CoreValues from "../components/CoreValues";
import PartnerLogos from "../components/PartnerLogos";


const About = () => {
<<<<<<< HEAD
 
    console.log("I want to see merge conflict");
=======

  console.log('About Conflict')

>>>>>>> 776f399d578f8c472b5adc4afd311a172bf33280
    return (
      <>
      <section className="text-white">
            <h1>Our Story</h1>

            <div className=" bgcoralwhitepink">
              <AboutInfo navLink={false} title={false} lineClamp={false} />
            </div>
            <Testimonials />
            <VisionMission/>
            <CoreValues/>
      </section>
      <section className="!py-0 !my-0">
        <PartnerLogos/>
      </section>
  </>
    );
  }
   
  export default About;