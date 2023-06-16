import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen flex flex-col justify-center items-center`}>
      <div className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Muhammed</span>
          </h1>
          <p className={`${styles.sectionHeadText} mt-2 text-white`}>
            I develop Front end, and <br className='sm:block hidden' />
            Back end web applications
          </p>
        </div>

        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
        </div>
      </div>
<button className={`${styles.heroSubText} mt-10 rounded-[40px] py-5 px-12 bg-[#915EFF] `
}>
  <a href="#work" >Start Exploring</a>
</button>


    </section>
  );
};

export default Hero;
