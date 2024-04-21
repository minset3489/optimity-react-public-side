import Testimonials  from '../components/Testimonials';
import Services from '../components/Services';
import Welcome from './../components/Welcome'
import AboutInfo from '../components/AboutInfo';
import HomeSolution from '../components/HomeSolution';
import HomeContact from '../components/HomeContact';

const Home = () => {
    return (
      <div className="text-4xl text-black">
        <Welcome />
        
        <div className="!bg-mydarkbg text-slate-200 z-10">
          <Services/>
        </div>

        <Testimonials />

        <div className="!bg-mydarkbg text-slate-200 z-10">
          <AboutInfo navLink={true} title={true} lineClamp={true} />
        </div>

        <HomeSolution/>
        
        <div className="!bg-mydarkbg text-slate-200 z-10">
          <HomeContact/>
        </div>

      </div>
    );
  }
   
  export default Home;