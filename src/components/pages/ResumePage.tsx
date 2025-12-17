import { motion } from 'framer-motion';

const ResumePage = () => {
  const internships = [
    {
      title: 'ERP Development Intern',
      company: 'Titan Company Limited',
      date: 'January 2025 • Hosur, India',
      points: [
        'Developed and customized ERP solutions for business requirements',
        'Collaborated with cross-functional teams on system optimization',
        'Gained expertise in enterprise-level application development',
      ],
    },
    {
      title: 'Web Development Intern',
      company: 'Luisant Software Solution',
      date: 'January 2023 • Chennai, India',
      points: [
        'Developed responsive web applications using HTML, CSS, JavaScript',
        'Built backend systems with PHP and MySQL databases',
        'Participated in full software development lifecycle',
      ],
    },
  ];

  const education = [
    {
      degree: 'MSc Data Science',
      school: 'Periyar University',
      date: '2024 - Present • Salem, India',
      details: 'Specializing in Machine Learning, Data Analytics, and Statistical Modeling',
    },
    {
      degree: 'BCA (Bachelor of Computer Applications)',
      school: 'AVS Arts & Science College',
      date: '2021 - 2024 • Salem, India',
      details: 'Foundation in programming, databases, and computer science fundamentals',
    },
  ];

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="container mx-auto z-10 max-w-4xl">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4 text-center"
        >
          My <span className="text-primary">Resume</span>
        </motion.h2>
        <motion.p
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-center mb-12"
        >
          A summary of my professional experience and qualifications
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 gradient-primary rounded-xl text-foreground font-semibold flex items-center gap-3 mx-auto"
          >
            <span>📥</span> DOWNLOAD RESUME
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-8 space-y-8"
        >
          {/* Internship Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-2xl">
                💼
              </div>
              <h3 className="text-2xl font-bold text-foreground">Internship Experience</h3>
            </div>
            
            <div className="space-y-6">
              {internships.map((job, i) => (
                <div key={i} className="border-l-2 border-primary/50 pl-6">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="w-3 h-3 bg-primary rounded-full -ml-[1.6rem] mt-2"></span>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground">{job.title}</h4>
                      <p className="text-primary text-sm font-semibold">{job.company}</p>
                      <p className="text-muted-foreground text-sm">{job.date}</p>
                      <ul className="mt-3 space-y-2">
                        {job.points.map((point, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-2xl">
                🎓
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i} className="border-l-2 border-purple-500/50 pl-6">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="w-3 h-3 bg-purple-500 rounded-full -ml-[1.6rem] mt-2"></span>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground">{edu.degree}</h4>
                      <p className="text-purple-400 text-sm font-semibold">{edu.school}</p>
                      <p className="text-muted-foreground text-sm">{edu.date}</p>
                      <p className="text-sm text-muted-foreground mt-2">{edu.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-2xl">
                🏆
              </div>
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: 'Python Programming', issuer: 'Coursera', icon: '🐍' },
                { name: 'Machine Learning', issuer: 'Online Platform', icon: '🤖' },
                { name: 'Data Analytics', issuer: 'Professional Course', icon: '📈' },
                { name: 'SQL Database', issuer: 'Certification Course', icon: '💾' },
              ].map((cert, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center text-xl">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumePage;
