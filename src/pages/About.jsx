import React from "react";
import TopButton from "../components/BacktoTop";
import NavbarItems from "../components/Navbar";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Footer";
import Map from "../components/Contact/Map";
import MasonryAbout from "../components/About/MasonryAbout";
import Section1 from "../components/About/Section1";
import Section2 from "../components/About/Section2";
import DontionButton from "../components/DonationButton";

const About = () => {
  return (
    <div className="bg-white">
      <TopButton />
      <NavbarItems />
      <div
        className="bg-blue-900 text-white font-bold lg:text-6xl text-lg flex items-center justify-center
        py-10"
      >
        <h1 className="text-6xl font-bold">About Us</h1>
      </div>
      <div
        className="bg-white text-black font-thin lg:text-xl text-md flex items-center justify-center
        py-10"
      >
        <h1 className="text-xl font-bold lg:mx-40 mx-10 ">
          Pagaria Welfare Foundation is a Mumbai based Indian not-for-profit
          organization registered as a section 8 of The Companies Act 2013 in
          India started in 2019 and is led by Vaidhei Pagaria and has projects
          accross India for education , health & development . It is an
          initiative of like minded people and various well wishers who believe
          in , "Goodness is the only investment that succeds "and at Pagaria
          welfare foundation we believe in doing good . Be it big or small good
          efforts will always make a difference . Small acts of kindness shall
          bring small changes but the impact is very significant .
        </h1>
      </div>
      <MasonryAbout />
      <div
        className="bg-blue-900 text-white font-bold lg:text-4xl text-lg flex items-center justify-center
        py-10 my-5"
      >
        <h1 className=" font-bold italic ">
          A man's true wealth is the goodness he contributes to this world
        </h1>
      </div>
      <Section1 />
      <Section2/>
      <DontionButton/>
      <Footer />
    </div>
  );
};

export default About;
