import { Code, Microscope, Award } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming & Data',
      icon: <Code size={24} className="text-blue-700" />,
      skills: [
        'Python (Pandas, NumPy, Matplotlib)',
        'SQL',
        'Tableau',
        'JMP',
        'MATLAB',
        'ANSYS',
        'CAD',
        'Finite Element Analysis (FEA)',
      ],
    },
    {
      title: 'Materials Science',
      icon: <Microscope size={24} className="text-blue-700" />,
      skills: [
        'Polymer Synthesis',
        'Characterization (TEM, SEM, DSC)',
        '3D Printing',
        'Failure Analysis',
        'Rheology',
        'Wet Lab Experience',
      ],
    },
    {
      title: 'Certifications',
      icon: <Award size={24} className="text-blue-700" />,
      skills: [
        'Six Sigma White Belt',
        'Design of Experiments (JMP)',
        'NVIDIA Data Science Workflows',
      ],
    },
  ];

  return (
    <section id="skills" className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-300">
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h3 className="text-xl font-semibold text-gray-900">
                {category.title}
              </h3>
            </div>

            <ul className="space-y-2">
              {category.skills.map((skill, idx) => (
                <li
                  key={idx}
                  className="text-gray-700 pl-4 relative before:content-['▪'] before:absolute before:left-0 before:text-blue-700"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}


