import { GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="mb-12 md:mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-2 md:pb-3 border-b-2 border-gray-300">
        About
      </h2>
      
      <div className="prose max-w-none">
        <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed">
          I am a Process / Packaging Engineer at Fuyao Glass America in Dayton, OH, with an M.S. in 
          Materials Science from Carnegie Mellon University. I work on automotive glass manufacturing 
          processes and packaging development, from DOE-based process validation and production data 
          analysis to CATIA-based packaging design for Tesla and BMW programs.
        </p>
        
        <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
          Backed by a research background in polymers, materials characterization, and machine learning, 
          I combine hands-on shop-floor engineering with data-driven problem solving to improve 
          throughput, product protection, and quality.
        </p>

        <div className="space-y-4 md:space-y-6">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 flex items-center gap-2">
            <GraduationCap size={24} className="text-red-700 md:w-7 md:h-7" />
            Education
          </h3>

          <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-200">
            <div className="mb-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                  Carnegie Mellon University
                </h4>
                <span className="text-xs md:text-sm text-gray-600 sm:flex-shrink-0">Aug 2024 - May 2026</span>
              </div>
            </div>
            <p className="text-red-700 font-medium mb-2">
              M.S. in Materials Science
            </p>
            <p className="text-gray-700 mb-2">GPA: 3.9/4.0</p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Core Courses:</span> Structure and Characterization 
              of Materials, Thermodynamics of Materials, Advanced Polymer Science, 3D Printing
            </p>
          </div>

          <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-200">
            <div className="mb-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                  Shanghai Institute of Technology
                </h4>
                <span className="text-xs md:text-sm text-gray-600 sm:flex-shrink-0">Sep 2020 - Jun 2024</span>
              </div>
            </div>
            <p className="text-red-700 font-medium mb-2">
              B.Eng. in Materials Science and Engineering
            </p>
            <p className="text-gray-700 mb-2">GPA: 3.9/5.0</p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Core Courses:</span> Fundamentals of Materials Science, 
              Polymer Physics, Polymer Chemistry, Polymer Processing Techniques
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


