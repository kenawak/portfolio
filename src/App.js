// src/App.js
import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import './App.css';
import Card from './components/Card';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import image1 from './assets/images (2).jpeg'; 
import image2 from './assets/download.jpeg'; 
import image3 from './assets/download (1).jpeg';



function App() {
  const cookingItems = [
    { name: 'Showkez', description: 'A platform where developers showcase their projects and collaborate.' },
    { name: 'TeleBuy', description: 'A bot to buy from cheap stores.' }
];


  const serviceItems = [
    {
      name: '👨🏾‍💻 hire me as a developer',
      description: 'with experience building production-ready applications, I can build your next project.',
    },
    {
      name: '💬 book a consultation',
      description: 'Need advice on a project? Book a consultation to get clarity on your next steps.',
    },
    {
      name: '🎥 freelancing',
      description: 'I freelance and help build and satisfy my clients’ needs.'
    }
    
  ];

  const projectItems = [
    {
      image: image1,
      title: 'AAUHub',
      detail: 'A platform to help students get into and study their dream college and department.',
    },
    {
      image: image2,
      title: 'Static Site Generator',
      detail: 'A simple tool for generating fast and lightweight static websites.',
    },
    {
      image: image3, // Replace `image3` with the appropriate image variable or URL.
      title: 'X Video Downloader',
      detail: 'A click away to get your X video.',
    },
];

  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Card items={cookingItems} />
      <Services items={serviceItems} />
      <Projects items={projectItems} />
      <Contact />
    </div>
  );
}

export default App;