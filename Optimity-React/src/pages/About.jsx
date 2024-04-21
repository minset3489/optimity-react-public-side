import AboutInfo from "../components/AboutInfo";
import Testimonials from "../components/Testimonials";
import VisionMission from "../components/VisionMission";
import CoreValues from "../components/CoreValues";


const About = () => {
 

    return (
      <section className="text-white">
            <h1>About Us</h1>

            <div className=" bgcoralwhitepink">
              <AboutInfo navLink={false} title={false} lineClamp={false} />
            </div>
            <Testimonials />
            <VisionMission/>
            <CoreValues/>
      </section>
    );
  }
   
  export default About;