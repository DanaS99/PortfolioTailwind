import { quote1 } from '../assets/images';
import { heroImages } from '../constants';
import HeroCard from '../components/HeroCard';
import { useState } from 'react';

const Hero = () => {
 
  const [bigHeroImg, setBigHeroImg] = useState(quote1)

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
          Full Stack Web Developer
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            Hi there, I'm
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Dana</span> Sobh
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
        A passionate web developer dedicated to crafting clean, efficient, and user-friendly designs. With a love for solving complex challenges, I aim to bring creative ideas to life through code.
        </p>

      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigHeroImg}
          alt='image collection'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {heroImages.map((image, index) => (
            <div key={index}>
              <HeroCard
                index={index}
                imgURL={image}
                changeBigHeroImage={(shoe) => setBigHeroImg(shoe)}
                bigHeroImg={bigHeroImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
