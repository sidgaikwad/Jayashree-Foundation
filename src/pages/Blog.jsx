import React from 'react'
import Blogs from '../components/Blog/Blogs'
import NavbarItems from '../components/Navbar'
import Footer from '../components/Footer';
import TopButton from '../components/BacktoTop';

const Blog = () => {
  return (
    <div className='bg-white'>
      <TopButton />
    <NavbarItems />
    <div>
        <h1 className='bg-blue-900 text-white font-bold lg:text-6xl text-2xl flex items-center justify-center
        py-10
        '>Latest Update</h1>
    </div>
    <Blogs />
    <Footer />
    </div>
  );
}

export default Blog