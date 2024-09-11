import Button from "../components/Button";

const HireMe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
        <span className='text-coral-red'> Hire </span>Me
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type='text' placeholder='Enter your email...' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <a 
            href="mailto:danasobh46@gmail.com?subject=Hiring Inquiry&body=Hi, I am interested in working with you."
            className="w-full"
          >
            <Button label='Hire Me' fullWidth />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
