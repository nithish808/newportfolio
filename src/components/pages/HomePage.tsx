import { motion } from 'framer-motion';
import SocialLinks from '../SocialLinks';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const HomePage = ({ setCurrentPage }: HomePageProps) => {
  const badges = [
    { icon: '🧠', text: 'Machine Learning', color: 'from-primary/20 to-secondary/20 border-primary/30' },
    { icon: '📊', text: 'Data Science', color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30' },
    { icon: '💻', text: 'Data Analyst', color: 'from-secondary/20 to-primary/20 border-secondary/30' },
  ];

  const stats = [
    { num: '3+', label: 'Projects' },
    { num: '2', label: 'Internships' },
    { num: 'MSc', label: 'Data Science' },
    { num: '8+', label: 'Skills' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative z-10">
      <div className="container mx-auto text-center max-w-5xl">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-block px-4 py-2 rounded-full border border-primary/50 bg-primary/10 text-primary text-sm mb-8"
        >
          ✨ Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 relative z-10"
        >
          Hi, I'm <span className="gradient-text">Nithishkumar V</span>
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-8 relative z-10"
        >
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`px-6 py-3 rounded-xl bg-gradient-to-r ${badge.color} border backdrop-blur-sm flex items-center gap-2 relative z-10`}
            >
              <span>{badge.icon}</span>
              <span className="text-foreground font-medium">{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed relative z-10"
        >
          MSc Data Science student at Periyar University. Passionate about developing intelligent systems with Machine Learning and Deep Learning to solve real-world problems.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto relative z-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 relative z-10"
            >
              <div className="text-3xl font-bold text-primary mb-1">{stat.num}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center relative z-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage('contact')}
            className="px-8 py-4 rounded-xl gradient-button flex items-center gap-2"
          >
            HIRE ME <span>→</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage('projects')}
            className="px-8 py-4 rounded-xl border border-white/20 text-foreground font-semibold hover:bg-white/5 transition-all"
          >
            VIEW PROJECTS
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <SocialLinks />
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
