import { Outlet, NavLink } from "react-router-dom";

import '@fontsource/fira-mono';
import logoImg from './../assets/logo.png'
import logoText from './../assets/OptimityLogo.png'

import { IoMdHome } from "react-icons/io";
import { HiNewspaper } from "react-icons/hi2";
import { FaHandshake } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import Footer from "../Footer";

export default function RootLayout() {

    const logoImage = logoImg;
    const logoWithText = logoText;

    const links = [
            {name : 'Home', icon:IoMdHome, url:'/'},
            {name : 'Solutions', icon:FaHandshake, url:'/solutions'},
            {name : 'About', icon:'', url:'/about'},
            {name : 'News', icon:HiNewspaper, url:'/news'},
            {name : 'Contact', icon:RiContactsFill, url:'/contact'}
        ];

  return (
    <div className="root-layout">
        <div className="fixed md:sticky bottom-0 md:top-0 left-0 right-0 bg-white md:border-b md:border-gray-300 md:shadow-md z-50">
            <section className='!p-0'>
                <div className='flex items-center justify-between'>
                    <div className='hidden md:flex items-center'>
                        <img src={logoImage} alt="Optimity Logo" />
                    <h3 className="logo font-logo text-mycoral font-thin ml-3">Optimity</h3>
                    </div>

                    <nav className="flex items-center text-center justify-evenly w-full md:w-auto">
                    {links.map((link, index) => (
                        <NavLink className='mainnav' key={index} to={link.url}>

                        <div className="md:hidden text-center mx-auto">
                            {link.icon ? (
                            <link.icon className="h-6 w-6 mx-auto" /> // Render the icon component if it exists
                            ) : (
                            <img className="h-20 mx-auto" src={logoWithText} alt="" /> // Otherwise, render logoWithText
                            )}
                        </div>

                        <div>
                            <span className={link.name === 'About' ? 'hidden md:block' : 'text-sm md:text-lg'}>
                            {link.name}
                            </span>
                        </div>

                        </NavLink>
                    ))}
                    </nav>
                    
                </div>
            </section>
        </div>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}