import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    tags: ['FULL STACK', 'DEVOPS', 'CI/CD'],
    title: 'Momentum',
    description:
      'Production-grade task manager with JWT auth, day planner, diary, and stats dashboard. Full CI/CD pipeline — GitHub Actions → DockerHub → Render. End-to-end ownership from schema design to live deployment.',
    tech: [
      'FastAPI',
      'React',
      'PostgreSQL',
      'Docker',
      'GitHub Actions',
      'Alembic',
    ],
    source: 'https://github.com/Lucashobhin/task-manager-api',
    live: 'https://momentum-frontend-oyfa.onrender.com',
  },
];

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered
          ? 'translateY(-10px) rotate(-1.5deg)'
          : 'translateY(0) rotate(0deg)',
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        boxShadow: hovered
          ? '0 20px 60px rgba(255,42,42,0.25), 0 0 0 1px rgba(255,42,42,0.3)'
          : '0 4px 20px rgba(0,0,0,0.06)',
      }}
      className="bg-gray-50 rounded-3xl p-6 flex flex-col gap-4 cursor-pointer"
    >
      <div className="flex justify-center">
        <div className="w-3 h-3 rounded-full bg-gray-300" />
      </div>

      <p className="text-[#ff2a2a] text-xs font-black tracking-widest uppercase">
        {project.tags.join(' • ')}
      </p>

      <h3
        style={{
          color: hovered ? '#ff2a2a' : '#111',
          transition: 'color 0.3s',
        }}
        className="text-xl font-black leading-tight"
      >
        {project.title}
      </h3>

      <p className="text-gray-500 text-sm leading-relaxed font-medium">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-1">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs border border-gray-300 rounded-full px-3 py-1 text-gray-600 font-semibold"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-6 mt-2 pt-4 border-t border-gray-200">
        <a
          href={project.source}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1 text-sm font-black text-gray-900 hover:text-[#ff2a2a] transition-colors"
        >
          Source Code

          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>

        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1 text-sm font-black text-[#ff2a2a] hover:underline transition-colors"
        >
          Live Demo

          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16" data-aos="fade-up">
          <p className="inline-block border border-gray-300 rounded-full px-4 py-1 text-sm text-gray-500 mb-6">
            My Projects
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-2">
            Projects That Define
          </h2>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-4">
            My Journey
          </h2>

          <div className="w-40 h-1 bg-[#ff2a2a] rounded-full opacity-60 mb-6" />

          <p className="text-gray-500 text-base max-w-xl leading-relaxed font-medium">
            Production-grade systems built end-to-end — from database schema to
            live deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project, i) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <ProjectCard project={project} />
            </div>
          ))}

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-gray-50 rounded-3xl p-6 flex flex-col items-center justify-center gap-3 border-2 border-dashed border-gray-200 min-h-[300px]"
          >
            <div className="w-3 h-3 rounded-full bg-gray-200" />

            <p className="text-gray-400 text-sm font-black tracking-widest uppercase">
              More Coming Soon
            </p>

            <p className="text-gray-300 text-xs text-center">
              Currently building...
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;