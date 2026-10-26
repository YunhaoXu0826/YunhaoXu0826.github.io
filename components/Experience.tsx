import { Briefcase, MapPin, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Process / Packaging Engineer',
      company: 'Fuyao Glass America Inc.',
      location: 'Dayton, OH',
      period: 'Jul 2026 - Present',
      responsibilities: [
        'Improved automotive glass assembly line production attainment from ~65% to 85% through shift-level production data analysis, cycle-time and downtime review, and root-cause investigations of underperforming shifts',
        'Planned and executed DOE-based process validation for bonding, soldering, chemical application, and curing processes, including temperature mapping, pull testing, and process-parameter comparison to establish acceptable operating conditions',
        'Introduced and optimized new tooling and process aids using CATIA and 3D printing, validating prototypes on the production floor and implementing design changes to address quality and handling issues',
        'Developed and updated SOPs and Work Instructions for automotive glass manufacturing processes, translating engineering and quality requirements into standardized shop-floor procedures and incorporating operator feedback',
        'Led packaging development for Tesla and BMW automotive glass programs, translating product and logistics requirements into CATIA-based packaging designs and coordinating cross-functional design reviews through production release',
        'Validated prototype racks and packaging systems through dimensional, fit, and functional reviews; identified dunnage, flipper, and product-loading issues and drove supplier corrective actions',
        'Developed packaging specifications, inspection standards, and work instructions to standardize packaging quality and support mass production',
        'Designed custom fixtures and protective components using CATIA and 3D printing to improve product protection and operator efficiency',
      ],
    },
    {
      role: 'R&D Intern',
      company: 'Shanghai Chest Medical Devices Co.',
      location: 'Shanghai, China',
      period: 'Jul 2024 - Aug 2024',
      responsibilities: [
        'Created 2D and 3D CAD drawings of medical devices and generated 2D drawings for inner and outer packaging, ensuring design accuracy for downstream testing and analysis',
        'Performed bursting strength, hydrostatic head, and dry state fiber shedding tests on medical devices, collecting structured datasets for quality evaluation',
        'Analyzed over 150 test samples using Python (Pandas, NumPy) and Excel, applying statistical methods and visualization to identify key quality trends and reducing data processing time by 40% through automation',
        'Collaborated with R&D, QA, and Manufacturing teams to investigate test inconsistencies; applied root cause analysis and data-driven insights to resolve 2 major issues, reducing retesting frequency by 25% and enabling faster design iterations',
      ],
    },
  ];

  return (
    <section id="experience" className="mb-12 md:mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-2 md:pb-3 border-b-2 border-gray-300">
        Professional Experience
      </h2>

      <div className="space-y-6 md:space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="mb-3 md:mb-4">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                {exp.role}
              </h3>
              <div className="flex flex-wrap items-center gap-2 md:gap-4 text-red-700 font-medium mb-2 text-sm md:text-base">
                <span className="flex items-center gap-1">
                  <Briefcase size={14} className="md:w-4 md:h-4" />
                  {exp.company}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="md:w-3.5 md:h-3.5" />
                  {exp.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} className="md:w-3.5 md:h-3.5" />
                  {exp.period}
                </span>
              </div>
            </div>

            <ul className="space-y-2">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-gray-700 text-sm md:text-base pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-red-700 before:font-bold before:text-lg">
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}


