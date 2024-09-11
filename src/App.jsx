import { Hero,
  Skills,
  Services,
  WorkHighlight,
  HireMe,
  Footer } from './sections'
import Nav from './components/Nav'
import 'remixicon/fonts/remixicon.css';

const App = () => {
  return (
    <main className='relative'>
      <Nav/> 
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section className='padding'>
        <Skills/>
      </section>
      <section className='padding-x py-10'>
        <Services/>
      </section>
      <section className='padding bg-pale-blue'>
        <WorkHighlight/>
      </section>
      <section className='padding-x sm:py-32 py-16 py-full'>
        <HireMe/>
      </section>
      <section className='padding-x padding-t pb-8 bg-black'>
        <Footer/>
      </section>
    </main>
  )
}

export default App