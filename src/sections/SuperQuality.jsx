import { skill1 } from '../assets/images';
import Button from '../components/Button';

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='w-full flex max-lg:flex-col justify-between items-center gap-10 max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='capitalize text-4xl font-palanquin font-bold lg:max-w-lg'>
          We provide you <span className='text-coral-red'>super</span> <span className='text-coral-red'>quality</span>{' '}
          shoes
        </h2>
        <p className='mt-4 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7'>
          Ensuring premium comfort ans style, our shoes are crafted and designed
          to elevate your experience. <br />
          <br /> Our dedication to detail and excel the best to satisfy you
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>
      <div className='flex flex-1  justify-center items-center'>
        <img src={skill1} alt='super quality' width={570} height={522} className='object-contain' />
      </div>
    </section>
  );
};

export default SuperQuality;
