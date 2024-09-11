import SkillsCard from '../components/SkillsCard';
import { products } from '../constants';

const Skills = () => {
  return (
    <section id='skills' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          My <span className='text-coral-red'>Skills</span> That Shape My Work
        </h2>

        <ul className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          <li className='font-semibold'>Web Development: </li> HTML, PHP, CSS,
          SASS, Bootstrap, MaterialUI, React JS, Node JS, JSON, Tailwind Mobile
          development: React Native(beginner)
          <li className='font-semibold'>Programming Languages: </li> C, C#,
          Visual Basic, ASP.net, JavaScript, Python, Java, Kotlin (basics),
          Angular (basics), .NET (basics)
          <li className='font-semibold'>Database Management: </li> Relational
          Database, SQL, NoSQL, MongoDB
          <li className='font-semibold'>Tools: </li>Git, GitHub actions, Matlab,
          Visual Studio Code, Atom, Android Studio, Figma
        </ul>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  mt-16 gap-14 sm:gap-14 '>
        {products.map((product) => (
          <SkillsCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
