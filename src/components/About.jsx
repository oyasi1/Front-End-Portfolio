import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='I Love My Job' />
          <p className='text-slate-600 mt-8 leading-loose'>
          I have keen interest for design. As a Developer, i ensure the alignment of web design and user experience requirements, optimizing web pages for maximum efficiency, and maintaining brand consistency across all web pages.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
