import { useState } from 'react';
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={60}
            height={60}
          />
        </a>
        {/* Desktop Menu */}
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Mobile Menu Icon */}
        <div className='lg:hidden'>
          <img 
            src={hamburger} 
            alt='hamburger icon' 
            width={25} 
            height={25} 
            onClick={handleMenuToggle} 
            className='cursor-pointer'
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full bg-white shadow-lg p-4 lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className='flex justify-between items-center mb-4'>
          <a href='/'>
            <img
              src={headerLogo}
              alt='logo'
              width={60}
              height={60}
            />
          </a>
          <img 
            src={hamburger} 
            alt='close icon' 
            width={25} 
            height={25} 
            onClick={handleMenuToggle} 
            className='cursor-pointer'
          />
        </div>
        <ul className='flex flex-col items-center gap-4'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
                onClick={handleMenuToggle} 
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
    
      </div>
    </header>
  );
};

export default Nav;
