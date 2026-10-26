import { BookOpen, ExternalLink, GraduationCap } from 'lucide-react';

export default function Publications() {
  const publications = [
    {
      title: 'Molecular Parameters Favoring Disordered Hyperuniformity in Brush Particle Materials',
      authors: [
        'Jirameth Tarnsangpradit',
        'Maryam Bagheri',
        'Owen Chen',
        'Hanshu Wu',
        'Rongguan Yin',
        'Yunhao Xu',
        'Alamgir Karim',
        'Krzysztof Matyjaszewski',
        'Michael R. Bockstaller',
      ],
      venue: 'Macromolecules',
      details: 'Vol. 59, Issue 19, pp. 10748-10759',
      date: 'Oct 2026',
      publisher: 'American Chemical Society',
      link: 'https://pubs.acs.org/mamobx/article/59/19/10748/5439420',
    },
  ];

  return (
    <section id="publications" className="mb-12 md:mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-2 md:pb-3 border-b-2 border-gray-300">
        Publications
      </h2>

      <div className="space-y-4 md:space-y-6">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 leading-snug flex items-start gap-2">
              <BookOpen size={20} className="text-red-700 mt-1 flex-shrink-0" />
              <span>{pub.title}</span>
            </h3>

            <p className="text-sm md:text-base text-gray-700 mb-2">
              {pub.authors.map((author, idx) => (
                <span key={idx}>
                  {author === 'Yunhao Xu' ? (
                    <strong className="text-gray-900">{author}</strong>
                  ) : (
                    author
                  )}
                  {idx < pub.authors.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>

            <p className="text-sm md:text-base text-red-700 font-medium mb-1">
              <em>{pub.venue}</em>, {pub.details} ({pub.date})
            </p>
            <p className="text-xs md:text-sm text-gray-600 mb-3">{pub.publisher}</p>

            <div className="flex flex-wrap gap-3">
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-red-700 hover:text-red-800 hover:underline"
              >
                <ExternalLink size={14} />
                View Paper
              </a>
              <a
                href="https://scholar.google.com/citations?user=BzX3ZUsAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-red-700 hover:text-red-800 hover:underline"
              >
                <GraduationCap size={14} />
                Google Scholar
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
