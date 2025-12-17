import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleField from '@/components/ParticleField';
import Navbar from '@/components/Navbar';
import HomePage from '@/components/pages/HomePage';
import AboutPage from '@/components/pages/AboutPage';
import ProjectsPage from '@/components/pages/ProjectsPage';
import SkillsPage from '@/components/pages/SkillsPage';
import ResumePage from '@/components/pages/ResumePage';
import ContactPage from '@/components/pages/ContactPage';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const pages: Record<string, React.ReactNode> = {
    home: <HomePage setCurrentPage={setCurrentPage} />,
    about: <AboutPage />,
    projects: <ProjectsPage />,
    skills: <SkillsPage />,
    resume: <ResumePage />,
    contact: <ContactPage />,
  };

  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden relative">
      <div className="fixed inset-0 bg-background z-0" />
      <ParticleField />
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          {pages[currentPage]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Index;
