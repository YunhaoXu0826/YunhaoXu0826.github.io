import { Presentation, Download, ExternalLink } from 'lucide-react';

export default function Presentations() {
  const presentations = [
    {
      title: 'ML-Based Prediction of Mechanical Properties in Polymer-Grafted Nanoparticles',
      date: 'December 2025',
      description: 'Research presentation on machine learning models for predicting Young\'s modulus from molecular structure parameters.',
      file: '/presentation.pdf',
      institution: 'Carnegie Mellon University',
    },
    // 可以添加更多演讲
  ];

  return (
    <section id="presentations" className="mb-12 md:mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-2 md:pb-3 border-b-2 border-gray-300">
        Research Presentations
      </h2>

      <div className="space-y-4 md:space-y-6">
        {presentations.map((presentation, index) => (
          <div
            key={index}
            className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-4 md:p-6">
              <div className="flex items-start gap-3 mb-3">
                <Presentation size={24} className="text-red-700 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 leading-snug">
                    {presentation.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm text-gray-600 mb-3">
                    <span>{presentation.institution}</span>
                    <span>•</span>
                    <span>{presentation.date}</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
                    {presentation.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={presentation.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-red-700 text-white font-medium rounded-md hover:bg-red-800 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>View Slides</span>
                </a>
                <a
                  href={presentation.file}
                  download
                  className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-red-700 text-red-700 font-medium rounded-md hover:bg-red-50 transition-colors"
                >
                  <Download size={16} />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <p className="text-sm text-gray-600 text-center">
          <strong>Note:</strong> More presentations and conference materials will be added as they become available.
        </p>
      </div>
    </section>
  );
}

