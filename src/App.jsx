import React from 'react';
import { CustomCursor } from './components/animation/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Sports } from './components/sections/Sports';
import { Contact } from './components/sections/Contact';
import { Message } from './components/sections/Message';
import { Leaders } from './components/sections/Leaders';

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <Contact />
        <About />
        <Sports />
        <Message />
        <Leaders />
      </main>

      <Footer />
    </>
  );
}

export default App;
