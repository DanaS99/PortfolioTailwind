const Work = ({ projectName, description }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>
        {projectName}
      </h3>
      <p className='mt-6 max-w-sm text-center info-text'>{description}</p>
      <div className='mt-3 flex justify-center items-center gap-2.5'>

      </div>
      
    </div>
  );
};

export default Work;