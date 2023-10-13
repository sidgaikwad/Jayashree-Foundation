import HeroSection from "../components/Home/HeroSection";
import TopButton from "../components/BacktoTop";
import Cards from "../components/Cards";
import DontionButton from "../components/DonationButton";
import Footer from "../components/Footer";
import About from "../components/Home/About";
import FocusAreas from "../components/Home/FocusAreas";
import Impact from "../components/Home/Impact";
import LatestUpdate from "../components/Home/LatestaUpdate";
import NavbarItems from "../components/Navbar";
import Supporters from "../components/Supporters";


const Home = () => {
  return (
    <div className="bg-white">
      <TopButton />
      <NavbarItems />

      {/* <div className="lg:flex items-center justify-center hidden  border-b-black border-b-4  ">
        <div className="mockup-phone border-purple-300 lg:scale-125 rotate-90  shadow-xl shadow-purple-400 ">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <CarousalItems />
            </div>
          </div>
        </div>
      </div> */}
      <HeroSection />
      <Cards />
      <About />
      <FocusAreas />
      <LatestUpdate />
      <Impact />
      <div
        className="bg-blue-900 text-white font-bold lg:text-xl text-md flex items-center justify-center
        py-10"
      >
        <h1 className=" font-medium">
          1 Hour a Week of Goodness can bring so much impact . Be a part & make
          someones Dream Come True !
        </h1>
      </div>
      
      <div
        className="bg-white text-black font-bold lg:text-4xl text-lg flex items-center justify-center
        py-10"
      >
        <h1 className="font-bold">
        Supporters & Partners
        </h1>
      </div>
      <Supporters />
      <DontionButton />
      <Footer />
    </div>
  );
};
export default Home;
