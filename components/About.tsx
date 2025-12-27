import { GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-300">
        About
      </h2>
      
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          I am a Materials Science and Engineering graduate student at Carnegie Mellon University 
          with a strong passion for polymer science, computational materials research, and data-driven 
          innovation. My research focuses on developing machine learning models to predict mechanical 
          properties of advanced materials and investigating self-healing hybrid materials.
        </p>
        
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          With hands-on experience in polymer synthesis, characterization, and computational analysis, 
          I bridge the gap between theoretical research and practical applications in materials engineering.
        </p>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
            <GraduationCap size={28} className="text-red-700" />
            Education
          </h3>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-semibold text-gray-900">
                Carnegie Mellon University
              </h4>
              <span className="text-sm text-gray-600">Aug 2024 - May 2026</span>
            </div>
            <p className="text-red-700 font-medium mb-2">
              M.S. in Materials Science
            </p>
            <p className="text-gray-700 mb-2">GPA: 3.9/4.0</p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Core Courses:</span> Structure and Characterization 
              of Materials, Thermodynamics, Advanced Polymer Science
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-semibold text-gray-900">
                Shanghai Institute of Technology
              </h4>
              <span className="text-sm text-gray-600">Sep 2020 - Jun 2024</span>
            </div>
            <p className="text-red-700 font-medium mb-2">
              B.Eng. in Materials Science and Engineering
            </p>
            <p className="text-gray-700 mb-2">GPA: 3.9/5.0</p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Core Courses:</span> Polymer Physics, 
              Polymer Chemistry, Polymer Processing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


