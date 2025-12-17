import { motion } from 'framer-motion';
import SocialLinks from '../SocialLinks';

const AboutPage = () => {
  const education = [
    { degree: 'MSc Data Science', school: 'Periyar University (Current)', icon: '🎓', color: 'bg-primary/20' },
    { degree: 'BCA', school: 'AVS Arts & Science College, 2021-2024', icon: '🎓', color: 'bg-secondary/20' },
    { degree: 'HSC', school: 'Govt Higher Sec. School, 2021', icon: '🎓', color: 'bg-purple-500/20' },
  ];

  const internships = [
    { title: 'ERP Development Intern', company: 'Titan Company Limited, Jan 2025', icon: '🏢' },
    { title: 'Web Development Intern', company: 'Luisant Software Solution, Jan 2023', icon: '💻' },
  ];

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="container mx-auto z-10 max-w-6xl">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4 text-center"
        >
          About <span className="text-primary">Me</span>
        </motion.h2>
        <motion.p
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-center mb-16"
        >
          A passionate data professional dedicated to turning raw data into meaningful stories
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 flex flex-col items-center text-center"
          >
            <div className="w-32 h-32 rounded-2xl gradient-primary flex items-center justify-center text-6xl mb-6">
              👤
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Nithishkumar V</h3>
            <p className="text-primary mb-4">Data Analyst | ML Enthusiast</p>
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <span>📍</span>
              <span>Salem, Tamil Nadu, India</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <span>📧</span>
              <span className="text-sm">nithishkumar8595@gmail.com</span>
            </div>
            <SocialLinks />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-2xl">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I am looking for a professional opportunity in a forward-looking organization where I can develop my skills, grow continuously, and contribute positively through my abilities, dedication, and interest.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Currently pursuing my MSc in Data Science at Periyar University, I specialize in Machine Learning, Deep Learning, and building intelligent systems. I have hands-on experience with Python, R, PowerBI, and MySQL.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-2xl">
                  🎓
                </div>
                <h3 className="text-2xl font-bold text-foreground">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    className="glass-card p-4 flex items-start gap-4"
                  >
                    <div className={`w-12 h-12 rounded-lg ${edu.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                      {edu.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground">{edu.school}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-2xl">
                  💼
                </div>
                <h3 className="text-2xl font-bold text-foreground">Internships</h3>
              </div>
              <div className="space-y-4">
                {internships.map((job, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    className="glass-card p-4 flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center text-2xl flex-shrink-0">
                      {job.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{job.title}</h4>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
