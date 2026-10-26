'use client';

import { Mail, Linkedin, GraduationCap, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'research', label: 'Research & Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'skills', label: 'Skills' },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-white border border-gray-300 rounded-md shadow-md"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen w-72 bg-gray-50 border-r border-gray-200
          overflow-y-auto z-40 transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="p-8">
          {/* Profile Photo */}
          <div className="mb-6 flex justify-center">
            <div className="w-40 h-40 bg-gray-300 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/Profile.jpg"
                alt="Yunhao (Henry) Xu"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="text-center mb-6">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Yunhao (Henry) Xu
            </h1>
            <p className="text-sm md:text-base font-medium text-red-700 mb-1">
              Process / Packaging Engineer
            </p>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed px-2">
              M.S. in Materials Science @ Carnegie Mellon University
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center text-xs md:text-sm text-gray-600 mb-6">
            <MapPin size={16} className="mr-2" />
            <span>Dayton, OH</span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8 pb-8 border-b border-gray-300">
            <a
              href="mailto:xyh18301778938@gmail.com"
              className="p-2 text-gray-700 hover:text-red-700 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/yunhao-henry-xu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-red-700 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://scholar.google.com/citations?user=BzX3ZUsAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-red-700 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="Google Scholar"
            >
              <GraduationCap size={20} />
            </a>
          </div>

          {/* Navigation Menu */}
          <nav>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      w-full text-left px-4 py-2 rounded-md transition-colors text-sm md:text-base
                      ${
                        activeSection === item.id
                          ? 'bg-red-700 text-white font-semibold'
                          : 'text-gray-700 hover:bg-gray-200'
                      }
                    `}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resume and Technical Showcase */}
          <div className="mt-6 space-y-3">
            <a
              href="/Yunhao_Henry_Xu_Resume_Process.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-3 bg-red-700 text-white font-semibold rounded-md hover:bg-red-800 transition-colors shadow-md text-sm md:text-base"
            >
              📄 Resume (Process)
            </a>
            <a
              href="/Yunhao_Henry_Xu_Resume_Packaging.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-3 bg-red-700 text-white font-semibold rounded-md hover:bg-red-800 transition-colors shadow-md text-sm md:text-base"
            >
              📄 Resume (Packaging)
            </a>
            <a
              href="/slides.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-3 bg-white text-red-700 font-semibold rounded-md border-2 border-red-700 hover:bg-red-50 transition-colors shadow-sm text-sm md:text-base"
            >
              🎯 Technical Showcase
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-300 text-xs text-gray-600">
            <p className="mb-1">xyh18301778938@gmail.com</p>
            <p>412-450-2179</p>
          </div>
        </div>
      </aside>
    </>
  );
}

