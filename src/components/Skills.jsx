import React from 'react';
import { motion } from 'framer-motion';
 
const Skills = () => {
  const skillsData = [
    {
      category: 'Backend Development',
      skills: ['Python', 'FastAPI', 'REST APIs', 'JWT Auth', 'PostgreSQL', 'MySQL', 'Alembic'],
    },
    {
      category: 'Frontend Development',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap'],
    },
    {
      category: 'DevOps & Cloud',
      skills: ['Docker', 'GitHub Actions', 'CI/CD', 'AWS', 'Linux', 'Git', 'GitHub'],
    },
    {
      category: 'ERP Systems',
      skills: ['ERP Implementation', 'Business Workflow Integration', 'Data Pipelines', 'Process Automation', 'Cleo AI Integration'],
    },
  ];
 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };
 
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 12 },
    },
  };
 
  const skillPillVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { type: 'spring', stiffness: 400, damping: 15 },
    },
  };
 
  const SkillCard = ({ category, skills }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      /* Changed h-fit to h-full and added flex flex-col to force identical heights */
      className="group relative bg-white border border-gray-200/60 rounded-3xl p-6 h-full flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-gray-200/30 transition-all duration-500"
    >
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-sm font-black text-gray-900 mb-5 tracking-widest uppercase">{category}</h3>
        {/* flex-grow ensures the inner content areas expand equally */}
        <div className="flex flex-wrap gap-2.5 content-start flex-grow">
          {skills.map((skill, idx) => (
            <motion.button
              key={idx}
              variants={skillPillVariants}
              initial="initial"
              whileHover="hover"
              className="px-3.5 py-1.5 text-xs font-semibold text-gray-900 bg-[#F5F4F2] hover:bg-white border border-gray-200/80 hover:border-[#ff2a2a] hover:text-[#ff2a2a] rounded-xl transition-all duration-300 cursor-default select-none"
            >
              {skill}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
 
  return (
    <section id="skills" className="relative w-full bg-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(0,0,0,.02)_25%,rgba(0,0,0,.02)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.02)_75%,rgba(0,0,0,.02)_76%,transparent_77%,transparent),linear-gradient(0deg,transparent_24%,rgba(0,0,0,.02)_25%,rgba(0,0,0,.02)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.02)_75%,rgba(0,0,0,.02)_76%,transparent_77%,transparent)] bg-[length:60px_60px]" />
      </div>
 
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16"
        >
          <div className="mb-6">
            <span className="inline-block text-xs font-bold text-gray-500 uppercase tracking-widest px-4 py-1 border border-gray-300 rounded-full">
              Technical Stack
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-4 tracking-tight">
            Technologies I Work With
          </h2>
          <div className="w-40 h-1 bg-[#ff2a2a] rounded-full opacity-60 mb-6" />
          <p className="text-gray-500 text-base max-w-xl leading-relaxed font-medium">
            Full-stack expertise across backend engineering, frontend development, DevOps pipelines, and enterprise workflow system integration.
          </p>
        </motion.div>
 
        {/* Added items-stretch to make sure row elements match heights correctly */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
        >
          {skillsData.map((item, idx) => (
            <SkillCard key={idx} category={item.category} skills={item.skills} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
 
export default Skills;