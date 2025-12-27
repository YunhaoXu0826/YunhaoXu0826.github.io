'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Research from '@/components/Research';
import Presentations from '@/components/Presentations';
import Skills from '@/components/Skills';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'research', 'presentations', 'skills'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="flex-1 lg:ml-72">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-16 lg:py-16">
          <About />
          <Experience />
          <Research />
          <Presentations />
          <Skills />
          
          <footer className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-300 text-center text-xs md:text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Yunhao (Henry) Xu. All rights reserved.</p>
            <p className="mt-1 md:mt-2">Built with Next.js, Tailwind CSS, and Lucide React</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
