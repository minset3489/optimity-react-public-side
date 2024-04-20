import { useState } from 'react';

import { NavLink } from "react-router-dom";

import { IoMdHome } from "react-icons/io";
import { IoInformationCircle } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa6";
import { PiNewspaperClippingDuotone } from "react-icons/pi";
import { IoLogIn } from "react-icons/io5";
import { MdPolicy } from "react-icons/md";
import { FaFileCircleExclamation } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";

const Footer = () => {
  const [footers] = useState([
    { title: 'Quick Links', link: [
      { name: 'Home', url: '/', icon: IoMdHome },
      { name: 'About', url: '/about', icon: IoInformationCircle },
      { name: 'Solutions', url: '/solutions', icon:FaHandshake },
      { name: 'News', url: '/news', icon: PiNewspaperClippingDuotone },
    ]},
    { title: 'Useful Links', link: [
      { name: 'FAQ', url: '/faq', icon: FaQuestion },
      { name: 'Login / Register', url: '/rorl', icon: IoLogIn },
      { name: 'Privacy Policy', url: '/pp', icon: MdPolicy },
      { name: 'Terms & Conditions', url: '/tc', icon: FaFileCircleExclamation },
    ]},
    { title: 'Contact Us', link: [
      { name: '+959 4 2501 7904', url: '/mobile1', icon:IoCall },
      { name: '+959 9 7976 2198', url: '/mobile2', icon:IoCall },
      { name: 'info@optimitycomm.com', url: '/infomail', icon: AiTwotoneMail},
    ]},
    { title: 'Follow US', link: [
      { name: 'Facebook', url: 'https://www.facebook.com/OptimityMyanmar', icon: FaFacebook },
      { name: 'LinkedIn', url: '/LinkedIn', icon: FaLinkedin },
      { name: 'Whatsapp', url: '/Whatsapp', icon: FaWhatsapp},
      { name: 'Github', url: '/Github', icon: FaGithub },
    ]},
  ]);

  return (
    <div className="place-items-center items-center mx-auto pt-0 pb-36 sm:pb-0 md:pb-0 mt-4">
        <section className="grid grid-cols-auto-fit grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-black mx-auto gap-8 pt-0">
        
            {footers.map((footer) => (
              <div key={footer.title} className="flex flex-col">
                  <h4 className="font-bold mb-4">{footer.title}</h4>
                  {footer.link.map((link) => (
                    <NavLink key={link.name} to={link.url} className="text-lg hover:text-white p-1 !bg-none">
                      <div className="flex">
                        <div className="mr-1 mt-1">
                            {link.icon ? (
                            <link.icon className=" text-left mx-auto" /> 
                            ) : <span>ICON</span>}
                        </div>
                        <div>{link.name}</div>
                      </div>
                    </NavLink>
                  ))}
              </div>
            ))}

        </section>
        <div className="text-center text-2xl text-violet-50 border-t border-white border-opacity-15 pt-2">
            Created by <span className="text-mydarkbg">Min Set</span> | All rights reserved!
        </div>
    </div>
  );
}

export default Footer;
