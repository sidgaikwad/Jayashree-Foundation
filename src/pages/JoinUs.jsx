import React from 'react'
import TopButton from '../components/BacktoTop'
import NavbarItems from '../components/Navbar'
import ContactForm from '../components/Contact/ContactForm'
import Footer from '../components/Footer'
import Map from '../components/Contact/Map'
import MasonryAbout from '../components/About/MasonryAbout'
import CardsJoinus from '../components/Joinus/CardsJoinUs'

const JoinUs = () => {
  return (
    <div className='bg-white'>
        <TopButton />
        <NavbarItems />
        <div className='bg-blue-900 text-white font-bold lg:text-6xl text-lg flex items-center justify-center
        py-10'>
            <h1 className='text-6xl font-bold'>Join Us</h1>
        </div>
        <div className='flex-wrap text-black font-bold lg:text-xl text-lg flex items-center justify-center
        py-10 my-5 '>
            <h1 className='italic font-thin '>Join our team as a volunteer or intern and get in touch for CSR projects or collaborations .
            <br />
             Alone we can do so little but together we can do much.</h1>
        </div>
        <CardsJoinus />
        <Footer />   
    </div>
  )
}

export default JoinUs;