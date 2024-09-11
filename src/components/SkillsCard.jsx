import RatingStars from './RatingStar';

const SkillsCard = ({ imgURL, name, rating }) => {

  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[280px] h-[280px]' />
      <div className='mt-8 flex justify-start gap-2.5'>
        <RatingStars rating={rating} />
      </div>
      <h3 className='mt-2 text-xl leading-normal font-semibold font-palanquin'>{name}</h3>
    </div>
  );
};

export default SkillsCard;
