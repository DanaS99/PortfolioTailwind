const HeroCard = ({ imgURL, changeBigHeroImage, bigHeroImg }) => {
  const handleClick = () => {
    if (bigHeroImg !== imgURL.bigImg) {
      changeBigHeroImage(imgURL.bigImg);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigHeroImg === imgURL.bigImg ? 'border-coral-red' : 'border-transparent'
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img
          src={imgURL.thumbnail}
          alt='image collection'
          width={127}
          height={103}
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default HeroCard;
