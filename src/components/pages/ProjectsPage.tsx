import { motion } from 'framer-motion';

const ProjectsPage = () => {
  const projects = [
    {
      year: '2025',
      title: 'Email Spam Detection',
      desc: 'A machine learning project using Naive Bayes algorithm for detecting spam emails. Built with CountVectorizer for feature extraction.',
      tech: ['Python', 'Naive Bayes', 'Streamlit', 'NLP'],
      icon: '💬',
      color: 'from-primary/10 to-secondary/10',
      code: 'https://github.com/nithish808/Email-Spam-Detection-using-ML.git',
      demo: 'https://email-spam-detection.streamlit.app',
    },
    {
      year: '2025',
      title: 'Next Word Prediction (IMDB)',
      desc: 'LSTM-based next-word prediction model trained on IMDB movie reviews. Features tokenization, padding, sequence handling.',
      tech: ['Python', 'TensorFlow', 'Keras', 'LSTM', 'Streamlit'],
      icon: '🧠',
      color: 'from-purple-500/10 to-pink-500/10',
      code: 'https://github.com/nithish808/next-word-prediction',
       demo: 'https://email-spam-detection.streamlit.app',
    },
    {
      year: '2024',
      title: 'Hotel Management System',
      desc: 'A comprehensive hotel management solution with Python GUI for booking automation, billing management, and customer tracking.',
      tech: ['Python', 'GUI', 'Database', 'Automation'],
      icon: '🏨',
      color: 'from-secondary/10 to-primary/10',
      code: 'https://github.com/nithish808/HOTEL-MANAGMENT-SYSTEM.git',
       demo: 'https://email-spam-detection.streamlit.app',
    },
  ];

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="container mx-auto z-10 max-w-6xl">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4 text-center"
        >
          My <span className="text-primary">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-center mb-16"
        >
          A showcase of machine learning and data science projects I've built
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(6, 182, 212, 0.2)' }}
              className={`bg-gradient-to-br ${project.color} backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden group cursor-pointer`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center text-3xl">
                    {project.icon}
                  </div>
                  <span className="text-sm text-muted-foreground bg-white/5 px-3 py-1 rounded-full">{project.year}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30">
                      {tech}
                    </span>
                  ))}
                </div>
<div className="flex gap-3">
  {/* SOURCE CODE */}
  {project.code && (
    <a
      href={project.code}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1"
    >
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-2 border border-white/20 rounded-lg text-foreground text-sm hover:bg-white/5 flex items-center justify-center gap-2 transition-all"
      >
        💻 SOURCE CODE
      </motion.button>
    </a>
  )}

  {/* DEMO */}
  {project.demo && (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1"
    >
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-2 gradient-primary rounded-lg text-foreground text-sm flex items-center justify-center gap-2"
      >
        🚀 DEMO
      </motion.button>
    </a>
  )}
</div>
              
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
