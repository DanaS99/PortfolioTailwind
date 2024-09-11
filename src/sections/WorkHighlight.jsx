import Work from "../components/Work";
import { reviews } from "../constants";

const WorkHighlight = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
      My Work
        <span className='text-coral-red'> Highlights </span>
      </h3>
      <p className='m-auto mt-4 max-w-lg  text-center info-text'>
      Discover key projects and the impact they had, showcasing my skills and commitment to excellence.
      </p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review, index) => (
          <Work
            key={index}
            projectName={review.projectName}
            description={review.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkHighlight;