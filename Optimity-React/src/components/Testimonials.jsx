import './Testimonials.css'
import { useState } from 'react';
import { Icon } from '@iconify/react';
import image1 from "./../assets/images/man-1.jpg"
import image2 from "./../assets/images/girl-1.jpg"

const users = [
  {
    id: "1",
    review: "Lorem ipsum dolor sit amet, consectestur adipiscing elit. Sed et malesuada eros. Nullam gravida vestibulum magna, ac commodo metus interdum sit amet.",
    name: "John Doe",
    userImageUrl: image1,
    rating: 5
  },
  {
    id: "2",
    review: "Vestibulum a magna augue. In vitae vestibulum est. Morbi posuere mauris in arcu bibendum, a efficitur enim accumsan. In eu urna aliquam, accumsan odio vel, vehicula justo.",
    name: "Jane Smith",
    userImageUrl: image2,
    rating: 4
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
      <div className="flex flex-col lg:flex-row items-center place-items-center gap-8 text-white">
        <div>
          <h4 className="md:text-3xl text-pink-50">What Our Clients Say 🙂</h4>
          <p className="text-xl pb-2 text-pink-100">We are proud of contributing to the success of our customers.</p>
          <div className="mt-2 flex gap-4">
            <Icon onClick={prev} icon="ei:arrow-left" className="h-14 w-14 text-white rounded-md bg-[#ffffff1a] bg-opacity-10 backdrop-blur-30 shadow-lg text-center cursor-pointer hover:bg-gradient-to-r hover:from-[#ff1493] hover:to-[#ff7f50]" />
            <Icon onClick={next} icon="ei:arrow-right" className="h-14 w-14 text-white rounded-md bg-[#ffffff1a] bg-opacity-10 backdrop-blur-30 shadow-lg text-center cursor-pointer hover:bg-gradient-to-r hover:from-[#ff7f50] hover:to-[#ff1493]" />
          </div>
        </div>
        <div>
          {users.map((user, idx) => (
            <div key={user.id} className={`slide p-6 md:p-10 max-w-[800px] transform-style-preserve-3d rounded-md bgtransparent ${idx === currentIndex ? 'block' : 'hidden'}`}>
              <p className="text-xl">{user.review}</p>
              <div className="mt-6 flex items-center gap-6 pt-6 border-t border-white border-opacity-20">
                <img className="h-28 w-28 rounded-full object-cover" src={user.userImageUrl} alt="" />
                <div>
                  <h4>{user.name}</h4>
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
