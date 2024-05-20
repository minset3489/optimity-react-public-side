import './Testimonials.css'
import { useState } from 'react';
import { Icon } from '@iconify/react';
import image1 from "./../assets/images/Mr-Sit-Paing.jpg"

const users = [
  {
    id: "1",
    review: "Optimity has been our chosen partner for the digital transformation journey we embarked since 2018. Their exceptional knowledge and passion for ICT infrastructure are among the strongest in the market. Their dedicated, customer-centric mindset has given us peace of mind, despite of challenging situations in Myanmar.",
    name: "Dr. Sitt Paing",
    position : "Chief Information Officer",
    company : "Yoma OUE Pun Hlaing Hospital Limited",
    userImageUrl: image1,
    rating: 5
  }
];

const ClientsReivew = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % users.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + users.length) % users.length);
  };

  return (
    <section>
      <div className="flex flex-col lg:flex-row items-center text-center  md:text-left place-items-center gap-8 text-white">
        <div>
          <h3 className="md:!text-4xl text-pink-50 mb-4">What Our Clients Say 💗</h3>
          <p className="text-xl pb-2 text-pink-100">We are proud of contributing to the success of our customers.</p>
          <div className="mt-2 flex gap-4 place-content-center md:place-content-start">
            <Icon onClick={prev} icon="ei:arrow-left" className="h-14 w-14 text-white rounded-md bg-[#ffffff1a] bg-opacity-10 backdrop-blur-30 shadow-lg text-center cursor-pointer hover:bg-gradient-to-r hover:from-[#ff1493] hover:to-[#ff7f50]" />
            <Icon onClick={next} icon="ei:arrow-right" className="h-14 w-14 text-white rounded-md bg-[#ffffff1a] bg-opacity-10 backdrop-blur-30 shadow-lg text-center cursor-pointer hover:bg-gradient-to-r hover:from-[#ff7f50] hover:to-[#ff1493]" />
          </div>
        </div>
        <div>
          {users.map((user, idx) => (
            <div key={user.id} className={`slide p-6 md:p-10 max-w-[800px] transform-style-preserve-3d rounded-md bgtransparent ${idx === currentIndex ? 'block' : 'hidden'}`}>
              <p className="text-xl text-justify">{user.review}</p>
              <div className="mt-6 flex items-center gap-6 pt-6 border-t border-white border-opacity-20">
                <img className="h-28 w-28 rounded-full object-cover" src={user.userImageUrl} alt="" />
                <div>
                  <h4>{user.name}</h4>
                  <div className="text-base text-slate-100 p-0 m-0">{user.position}</div>
                  <div className="text-base text-slate-100 p-0 m-0">{user.company}</div>
                  <div className="text-mydarkbg text-xl flex">
                    {[...Array(user.rating)].map((_, i) => (
                      <Icon key={i} icon="jam:star-f" />
                    ))}
                  </div>
                </div>
                <Icon className="text-7xl text-white ml-auto mb-auto" icon="fa6-solid:quote-right" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsReivew;
