import { styles } from "../../Styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Carousel from "../Home/TestCarousel";
import Home1 from '../../Images/Home/HeroCarousel/Home1.jpg'
import Home2 from '../../Images/Home/HeroCarousel/Home2.jpg'
import Home3 from '../../Images/Home/HeroCarousel/Home3.jpg'
import Home4 from '../../Images/Home/HeroCarousel/Home4.jpg'
import Home5 from '../../Images/Home/HeroCarousel/Home5.png'
import Home from '../../Images/Home/HeroCarousel/Home.jpg'




const HeroSection = () => {
  const slides = [ Home1, Home, Home2, Home3, Home4, Home5];
  return (
    <section  className={`${styles.paddingY} m-auto w-full h-screen mx-auto overflow-hidden bg-[BG] border-b-4 border-black`}>
      <div
        className={` inset-0 top-[120px]  max-w-7xl mx-auto  flex   flex-wrap items-start gap-5`}
      >
        <div className="flex flex-row gap-3">
          <div className='flex flex-col justify-center items-center '>

            {/* animation and styling of dot and line */}

            {/* <div className="animate-bounce flex flex-col w-6 h-6"> */}
            <div className="relative  h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-600"></span>
            </div>
            <div className="animate-pulse flex space-x-4">
              <div className='w-1 sm:h-[500px] h-80 bg-gradient-to-b from-blue-500' />
            </div>
          </div>

          {/* main header and about us */}

          <motion.div
          // className="card-container"
          initial={{y: 300, opacity:0.2}}
          animate={{y:0}}
          whileInView={{opacity:1 , decelerate:1}}
          transition={{duration: 1.5, bounce: 0.4 }}
          viewport={{ once: false, amount: 0.8 }}
          >  
            <h1 className={`${styles.sectionHeadText} text-black`}>
              Welcome to
              <br />
              <span className='text-blue-900'>Jayshree Foundation</span>
            </h1>
            <p className={`${styles.sectionSubText}  mt-2 text-black`}>
              your trusted partner for comprehensive digital <br className='sm:block hidden' />
              marketing solutions. We are a team of dedicated
              <br className='sm:block hidden' />
              professionals passionate about helping businesses
              <br className='sm:block hidden' />
              thrive in the digital landscape.
              
            </p>
            <div className="flex mt-5 ">
              <Link to="/Donation"
              rel="noreferrer noopener" 
              className=" relative px-5 py-3 overflow-hidden font-medium text-black bg-blue-200 border border-gray-100 rounded-lg  group shadow-2xl ">
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-blue-400 group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-400 group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-400 group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-400 group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-blue-500 opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease ">Donate Now</span>
              </Link>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
              </span>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`py-4   mx-auto`}
        >
          {/* <img src={Logo} alt='services' className=" mx-auto lg:w-[400px] lg:h-[400px] h-[240px] w-[240px]  bg-transparent" /> */}
         <div className="flex items-center justify-center scale-50 lg:scale-100  ">
        <div className="mockup-phone border-blue-900  transition-all  shadow-lg shadow-blue-950 ">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <Carousel 
               autoSlide={true}
               autoSlideInterval={2000}
               slides={slides}
              />
            </div>
          </div>
        </div>
      </div>
        </motion.div>
      </div>

    </section>
  );
}
export default HeroSection;  