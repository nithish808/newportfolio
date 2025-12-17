import { motion } from 'framer-motion';

const SkillsPage = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: '💻',
      color: 'bg-primary/20',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'R', level: 75 },
        { name: 'HTML', level: 80 },
        { name: 'CSS', level: 75 },
      ],
    },
    {
      title: 'Machine Learning',
      icon: '🧠',
      color: 'bg-purple-500/20',
      skills: [
        { name: 'Machine Learning', level: 85 },
        { name: 'Deep Learning', level: 80 },
        { name: 'NLP', level: 75 },
        { name: 'TensorFlow/Keras', level: 80 },
      ],
    },
    {
      title: 'Data Analysis',
      icon: '📊',
      color: 'bg-secondary/20',
      skills: [
        { name: 'Power BI', level: 85 },
        { name: 'Data Visualization', level: 80 },
        { name: 'Statistical Analysis', level: 75 },
        { name: 'Streamlit', level: 80 },
      ],
    },
    {
      title: 'Database',
      icon: '💾',
      color: 'bg-green-500/20',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'SQL Queries', level: 80 },
      ],
    },
    {
      title: 'Web Development',
      icon: '🌐',
      color: 'bg-pink-500/20',
      skills: [
        { name: 'HTML/CSS', level: 80 },
        { name: 'Streamlit Apps', level: 85 },
      ],
    },
    {
      title: 'Languages',
      icon: '🗣️',
      color: 'bg-orange-500/20',
      skills: [
        { name: 'Tamil', level: 100 },
        { name: 'English', level: 85 },
      ],
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
          My <span className="text-primary">Skills</span>
        </motion.h2>
        <motion.p
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-center mb-16"
        >
          A comprehensive overview of my technical expertise and proficiency levels
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center text-2xl`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-primary font-bold">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: i * 0.1 + j * 0.05, duration: 1 }}
                        className="skill-bar-fill"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
