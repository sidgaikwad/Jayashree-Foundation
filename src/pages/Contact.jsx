import React from 'react'
import NavbarItems from '../components/Navbar'
import ContactForm from '../components/Contact/ContactForm'
import Footer from '../components/Footer'
import Map from '../components/Contact/Map'
import TopButton from '../components/BacktoTop'

const Contact = () => {
  return (
    <div className='bg-white'>
        <TopButton />
        <NavbarItems />
        <div className='bg-blue-900 text-white font-bold lg:text-6xl text-lg flex items-center justify-center
        py-10'>
            <h1 className='text-6xl font-bold'>Contact Us</h1>
        </div>
        <ContactForm />
        <Map />
        <Footer />    
    </div>
  )
}

export default Contact;