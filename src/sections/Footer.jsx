import { copyrightSign } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className='py-12'>
      <div className='max-container flex flex-col lg:flex-row lg:justify-between gap-12 text-white'>
        {/* About Section */}
        <div className='flex flex-col lg:w-1/3'>
          <img src={headerLogo} alt='Footer Logo' className='w-14 mb-4' />
          <p className='text-sm leading-relaxed mb-6'>
            Explore my portfolio to see how my expertise in web development can bring your ideas to life with creative, effective, and user-focused solutions.
          </p>
          <div className='flex space-x-4'>
            {socialMedia.map((icon) => (
              <a 
                href={icon.link} 
                key={icon.alt} 
                className='bg-white p-2 rounded-full border border-gray-300 hover:border-gray-500 transition-colors'
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className='flex flex-col lg:flex-row lg:w-2/3 lg:justify-between'>
          {footerLinks.map((section) => (
            <div key={section.title} className='mb-6 lg:mb-0'>
              <h4 className='text-base font-semibold mb-4'>{section.title}</h4>
              <ul className='space-y-2'>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.link} 
                      className='hover:text-gray-600 transition-colors'
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className='mt-12 text-center text-sm text-gray-600'>
        <div className='flex justify-center items-center space-x-2 mb-4'>
          <img 
            src={copyrightSign} 
            alt='copyright sign' 
            width={16} 
            height={16} 
          />
          <p>© 2024 All rights reserved.</p>
        </div>
        <a 
          href='/terms' 
          className='hover:text-gray-800 transition-colors'
        >
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
