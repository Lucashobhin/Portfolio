import React, { useRef, useState, useEffect } from 'react';

const certs = [
  { id: 1, category: 'CLOUD • AI', title: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services', pdfUrl: '#' },
  { id: 2, category: 'CLOUD', title: 'Microsoft Azure Hands-On (AZ-900, 104, 305)', issuer: 'Microsoft', pdfUrl: '#' },
  { id: 3, category: 'DATA ANALYTICS', title: 'Power BI Data Analyst Associate', issuer: 'Microsoft (NASSCOM)', pdfUrl: '#' },
  { id: 4, category: 'DEVOPS • GIT', title: 'GitHub Foundations', issuer: 'Microsoft / GitHub', pdfUrl: '#' },
  { id: 5, category: 'DATABASE', title: 'MongoDB Certified Associate Developer', issuer: 'MongoDB Inc.', pdfUrl: '#' },
  { id: 6, category: 'JAVA CORE', title: 'Oracle Certified Foundations Associate – Java', issuer: 'Oracle Corp', pdfUrl: '#' },
  { id: 7, category: 'BACKEND', title: 'Node.js Application Developer', issuer: 'OpenJS Foundation', pdfUrl: '#' },
  { id: 8, category: 'FRONTEND', title: 'React Developer Certification', issuer: 'Meta', pdfUrl: '#' },
  { id: 9, category: 'SECURITY', title: 'Cybersecurity Essentials', issuer: 'Cisco NetAcad', pdfUrl: '#' },
  { id: 10, category: 'FRONTEND', title: 'HTML Essentials', issuer: 'Cisco NetAcad', pdfUrl: '#' },
  { id: 11, category: 'FRONTEND', title: 'CSS Essentials', issuer: 'Cisco NetAcad', pdfUrl: '#' },
  { id: 12, category: 'JS CORE', title: 'JavaScript Essentials 1', issuer: 'Cisco NetAcad', pdfUrl: '#' },
  { id: 13, category: 'JS CORE', title: 'JavaScript Essentials 2', issuer: 'Cisco NetAcad', pdfUrl: '#' },
];

const CertCard = ({ cert, index }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flex-shrink-0 w-56 cursor-pointer"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full transition-transform duration-500"
        style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)', height: '200px' }}
      >
        {/* Front */}
        <div className="absolute inset-0 bg-gray-100 rounded-3xl p-5 flex flex-col justify-between" style={{ backfaceVisibility: 'hidden' }}>
          <div className="flex justify-between items-start">
            <div className="w-3 h-3 rounded-full bg-gray-300" />
            <span className="text-gray-400 text-xs font-bold">{String(index + 1).padStart(2, '0')}</span>
          </div>
          <div>
            <p className="text-[#ff2a2a] text-[10px] font-bold tracking-widest uppercase mb-2">{cert.category}</p>
            <h3 className="text-gray-900 text-sm font-black leading-snug mb-4">{cert.title}</h3>
            <div>
              <p className="text-gray-400 text-[9px] uppercase tracking-widest font-semibold">ISSUED SYSTEM NODE</p>
              <p className="text-gray-600 text-xs font-medium">{cert.issuer}</p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-gray-900 rounded-3xl p-5 flex flex-col justify-between" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          <div className="flex justify-between items-start">
            <div className="w-8 h-8 rounded-full bg-[#ff2a2a] flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-gray-500 text-[9px] uppercase tracking-widest">SECURED NODE</span>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-[9px] uppercase tracking-widest mb-1">VERIFICATION OBJECT</p>
            <p className="text-white text-xs font-bold leading-snug mb-4">{cert.title}</p>
            <a href={cert.pdfUrl} className="inline-flex items-center gap-2 bg-[#ff2a2a] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-red-600 transition-colors">
              View PDF Certificate
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-[9px]">SYS ID: #{String(cert.id).padStart(2, '0')}</span>
            <span className="text-[#ff2a2a] text-[9px] font-bold tracking-widest">VERIFIED</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
  const scrollRef = useRef(null);
  const isPaused = useRef(false);
  const animRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const speed = 0.8;

    const animate = () => {
      if (!isPaused.current && el) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          el.scrollLeft = 0;
        }
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' });
    }
  };

  return (
    <section id="certifications" className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-start mb-12" data-aos="fade-up">
          <div>
            <p className="inline-block border border-gray-300 rounded-full px-4 py-1 text-sm text-gray-500 mb-4">System Badges</p>
            <h2 className="text-5xl font-black text-gray-900 leading-tight mb-2">Professional Credentials</h2>
            <div className="w-48 h-1 bg-[#ff6b6b] rounded-full opacity-60" />
          </div>
          <div className="flex gap-3 mt-4">
            <button onClick={() => scroll(-1)} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-500 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button onClick={() => scroll(1)} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-500 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => { isPaused.current = true; }}
          onMouseLeave={() => { isPaused.current = false; }}
        >
          {certs.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-10 italic" data-aos="fade-up">
          Hover a card to flip and verify • Total of {certs.length} certificates running.
        </p>
      </div>
    </section>
  );
};

export default Certifications;