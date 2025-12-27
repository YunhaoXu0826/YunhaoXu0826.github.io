import { FlaskConical, Calendar, Building } from 'lucide-react';

export default function Research() {
  const projects = [
    {
      title: 'ML-Based Prediction of Mechanical Properties in Polymer-Grafted Nanoparticles',
      institution: 'Carnegie Mellon University',
      period: 'Aug 2025 - Present',
      description:
        'Developing machine learning models to predict mechanical properties of polymer-grafted nanoparticles from molecular structure parameters.',
      highlights: [
        'Developed 8 regression models (XGBoost, Random Forest, Gradient Boosting, etc.) to predict Young\'s modulus from molecular structure',
        'Implemented hyperparameter optimization and cross-validation techniques to improve model accuracy',
        'Created automated scripts for model benchmarking and publication-ready visualization',
      ],
      tags: ['Machine Learning', 'Python', 'XGBoost', 'Polymers', 'Materials Modeling'],
    },
    {
      title: 'Role of Hyperuniformity in Self-Healing Hybrid Materials',
      institution: 'Carnegie Mellon University',
      period: 'Aug 2024 - Aug 2025',
      description:
        'Investigating the correlation between hyperuniformity and self-healing properties in hybrid nanocomposite materials.',
      highlights: [
        'Optimized thin-film coating processes (spin-coating) and performed TEM analysis',
        'Quantified hyperuniformity using Python/MATLAB algorithms',
        'Manuscript in preparation',
      ],
      tags: ['TEM', 'Python', 'MATLAB', 'Thin Films', 'Nanocomposites'],
    },
    {
      title: 'Water-Based Acrylate Pressure-Sensitive Adhesives',
      institution: 'Shanghai Institute of Technology',
      period: 'Jan 2024 - Jun 2024',
      description:
        'Synthesis and characterization of waterborne acrylic pressure-sensitive adhesives for sustainable applications.',
      highlights: [
        'Synthesized waterborne acrylic PSAs via suspension polymerization',
        'Characterized properties including peel strength, shear adhesion, and tack',
        'Visualized structure-property relationships using Tableau',
      ],
      tags: ['Polymer Synthesis', 'Characterization', 'Tableau', 'Adhesives'],
    },
  ];

  return (
    <section id="research" className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-300">
        Research & Projects
      </h2>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 border-b border-gray-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                <span className="flex items-center gap-1">
                  <Building size={14} />
                  {project.institution}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {project.period}
                </span>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <FlaskConical size={18} className="text-blue-700" />
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-blue-700"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


