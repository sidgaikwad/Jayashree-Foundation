import React from 'react'
import TopButton from '../components/BacktoTop'
import NavbarItems from '../components/Navbar'
import Footer from '../components/Footer'
import MediaGallery from '../components/Gallery/MediaCarousel'

const Gallery = () => {
  return (
    <div className='bg-white'>
        <TopButton />
        <NavbarItems />
        <div className='bg-blue-900 text-white font-bold lg:text-6xl text-lg flex items-center justify-center
        py-10'>
            <h1 className='text-6xl font-bold'>Gallery</h1>
        </div>
        <MediaGallery />
        <Footer/>    
    </div>
  )
}

export default Gallery