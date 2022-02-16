import React from 'react'
import Header_intro from './Header_intro';
import Intro from './Intro';
import Jumbo_uno from './Jumbo_uno';
import Jumbo_dos from './Jumbo_dos';
import Jumbo_tres from './Jumbo_tres';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
        <Header_intro/>
      <Intro />
      <Header_intro/>
      <Jumbo_uno/>
      <Jumbo_dos/>
      <Jumbo_tres/>
      <Footer/>
    </div>
  )
}

export default Home