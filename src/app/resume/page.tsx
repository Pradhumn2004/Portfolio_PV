import { personalInfo, experience, skills, education, projects, certifications, achievements, openSource } from "@/data/portfolio";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white text-black print:p-0">
      <div className="max-w-4xl mx-auto p-8 print:p-6">
        <div className="text-center mb-6 border-b-2 border-gray-200 pb-4">
          <h1 className="text-3xl font-bold text-gray-900">{personalInfo.name}</h1>
          <p className="text-lg text-blue-600 font-medium">{personalInfo.title}</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-500 mt-2">
            <span>{personalInfo.location}</span>
            <span>{personalInfo.phone}</span>
            <span>{personalInfo.email}</span>
            <span>{personalInfo.github.replace("https://", "")}</span>
            <span>{personalInfo.linkedin.replace("https://", "")}</span>
          </div>
        </div>

        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-1 mb-3">Professional Summary</h2>
          <p className="text-sm text-gray-600 leading-relaxed">{personalInfo.bio}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-1 mb-3">Work Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800">{exp.role}</h3>
                  <p className="text-sm text-blue-600">{exp.company}</p>
                </div>
                <span className="text-xs text-gray-400 shrink-0">{exp.period}</span>
              </div>
              <ul className="mt-2 space-y-1">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-1 mb-3">Projects</h2>
          {projects.map((proj) => (
            <div key={proj.id} className="mb-3">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-gray-800 text-sm">{proj.title}</h3>
                <span className="text-xs text-gray-400">{proj.period}</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">{proj.description}</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {proj.tech.map((t) => (
                  <span key={t} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 text-[10px] rounded">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-1 mb-3">Technical Skills</h2>
          {skills.map((cat) => (
            <div key={cat.category} className="mb-2">
              <h3 className="text-sm font-semibold text-gray-700">{cat.category}</h3>
              <p className="text-xs text-gray-600">{cat.items.join(" • ")}</p>
            </div>
          ))}
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-1 mb-3">Certifications</h2>
          {certifications.map((cert) => (
            <div key={cert.id} className="mb-2">
              <div className="flex items-start justify-between">
                <h3 className="text-sm font-semibold text-gray-700">{cert.title}</h3>
                <span className="text-xs text-gray-400 shrink-0">{cert.date}</span>
              </div>
              <p className="text-xs text-gray-500">{cert.issuer}</p>
            </div>
          ))}
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-1 mb-3">Achievements</h2>
          {achievements.map((ach) => (
            <div key={ach.id} className="mb-2">
              <div className="flex items-start justify-between">
                <h3 className="text-sm font-semibold text-gray-700">{ach.title}</h3>
                <span className="text-xs text-gray-400 shrink-0">{ach.date}</span>
              </div>
              <p className="text-xs text-gray-600">{ach.description}</p>
            </div>
          ))}
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-1 mb-3">Open Source Contributions</h2>
          {openSource.map((os) => (
            <div key={os.id} className="mb-2">
              <div className="flex items-start justify-between">
                <h3 className="text-sm font-semibold text-gray-700">{os.title}</h3>
                <span className="text-xs text-gray-400 shrink-0">{os.date}</span>
              </div>
              <p className="text-xs text-gray-600">{os.description}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-1 mb-3">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-2">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-gray-700">{edu.institution}</h3>
                  <p className="text-xs text-gray-600">{edu.degree}</p>
                </div>
                <span className="text-xs text-gray-400">{edu.period}</span>
              </div>
              {edu.cgpa && <p className="text-xs text-gray-500 mt-0.5">CGPA: {edu.cgpa}</p>}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
