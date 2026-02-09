import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const projects = [
    {
      title: 'MBIA Maryland - AI Career Mapping',
      emoji: '🤖',
      description: 'Innovative AI-powered career mapping platform developed through the Maryland Business Innovation Association (MBIA). Features intelligent data visualization, personalized career path recommendations, and real-time analytics integration.',
      tech: ['AI Integration', 'Data Visualization', 'React', 'API Integration', 'UX Design'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      badge: 'MBIA Project'
    },
    {
      title: 'Creatorverse',
      emoji: '🎨',
      description: 'Full-stack content management platform built with React and Supabase, featuring complete CRUD functionality for managing creator profiles and content.',
      tech: ['React', 'Supabase', 'CSS3', 'REST API'],
      liveUrl: 'https://creatorverse-sophie.netlify.app',
      githubUrl: 'https://github.com/sophoniegraham/Creatorverse',
      featured: true
    },
    {
      title: 'Restaurant Orders',
      emoji: '🍽️',
      description: 'A clean, responsive restaurant ordering app featuring modern UI, smooth animations, and professional design showcasing CSS layout expertise.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      liveUrl: 'https://sophie-restaurantorder.netlify.app',
      githubUrl: 'https://github.com/sophoniegraham/restaurant-orders',
      featured: true
    },
    {
      title: 'Todo App',
      emoji: '📝',
      description: 'Professional task management app with localStorage persistence, dark mode UI, and toast notifications. Features task completion tracking and glassmorphism design.',
      tech: ['React', 'JavaScript', 'CSS3', 'LocalStorage'],
      liveUrl: 'https://sophie-todo-app.netlify.app',
      githubUrl: 'https://github.com/sophoniegraham/todo-app',
      featured: true
    }
  ];

  const experiences = [
    {
      role: 'Lead Design Consultant',
      company: 'Johns Hopkins Medicine - Technology Innovation Center',
      period: 'Present',
      description: 'Leading UI/UX design initiatives for healthcare technology solutions, spearheading user research, and collaborating with cross-functional teams to deliver user-centered designs that improve patient care and clinical workflows.',
      skills: ['UI/UX Leadership', 'Healthcare Tech', 'User Research', 'Design Systems', 'Stakeholder Management']
    },
    {
      role: 'UX Lead',
      company: 'LactiSure MVP',
      period: '2024 - 2025',
      description: 'Led the complete UX strategy for LactiSure MVP, a maternal health technology platform. Designed intuitive user flows, conducted usability testing, and created high-fidelity prototypes that increased user engagement by delivering a seamless breastfeeding support experience.',
      skills: ['UX Strategy', 'Prototyping', 'Usability Testing', 'Mobile Design', 'Health Tech']
    },
    {
      role: 'AI Career Mapping Developer',
      company: 'Maryland Business Innovation Association (MBIA)',
      period: '2024',
      description: 'Developed an innovative AI-powered career mapping platform through MBIA. Integrated machine learning algorithms for personalized career recommendations, implemented advanced data visualization dashboards, and created an intuitive interface for career path exploration.',
      skills: ['AI Integration', 'Data Visualization', 'React Development', 'API Integration', 'Product Design']
    },
    {
      role: 'Fellow',
      company: 'G{Code}',
      period: '2024',
      description: 'Intensive software engineering fellowship focusing on full-stack web development, modern JavaScript frameworks, and professional development practices.',
      skills: ['React', 'JavaScript', 'Web Development', 'Version Control']
    }
  ];

  return (
    <div className="App">
      {/* Glassmorphism Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <h1 className="nav-logo">SG.</h1>
          <div className="nav-links">
            <button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</button>
            <button onClick={() => scrollToSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</button>
            <button onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</button>
            <button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">👋🏾 Welcome to my portfolio</div>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Sophonie Graham</span>
          </h1>
          <p className="hero-subtitle">Front End Web Developer | UX Leader | AI Integration Specialist</p>
          <p className="hero-description">
            I blend technical expertise with creative problem-solving to build responsive,
            user-centered web applications. With experience leading UX initiatives in healthcare tech
            and developing AI-powered solutions, I bring both technical precision and strategic thinking to every project.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('projects')} className="btn-primary">
              View My Work
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-secondary">
              Get In Touch
            </button>
          </div>
          <div className="hero-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>AI Integration</span>
            <span>UX Design</span>
            <span>Data Visualization</span>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="experience-section">
        <div className="container">
          <h2 className="section-title">
            <span className="section-emoji">💼</span>
            Professional Experience
          </h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-period">{exp.period}</div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <h4 className="timeline-company">{exp.company}</h4>
                  <p className="timeline-description">{exp.description}</p>
                  <div className="timeline-skills">
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">
            <span className="section-emoji">🚀</span>
            Featured Projects
          </h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <span className="project-emoji">{project.emoji}</span>
                  {project.featured && <span className="featured-badge">{project.badge || 'Featured'}</span>}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-buttons">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-live">
                    🌐 Live Demo
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-github">
                    💻 GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">
            <span className="section-emoji">💌</span>
            Let's Connect
          </h2>
          <p className="contact-description">
            I'm currently open to new opportunities! Whether you have a project in mind,
            want to collaborate, or just want to say hi, I'd love to hear from you.
          </p>
          <div className="contact-buttons">
            <a href="mailto:sophonieg14@gmail.com" className="contact-btn">
              📧 Email Me
            </a>
            <a href="https://www.linkedin.com/in/sophonie-graham-b28705119/" target="_blank" rel="noopener noreferrer" className="contact-btn">
              💼 LinkedIn
            </a>
            <a href="https://github.com/sophoniegraham" target="_blank" rel="noopener noreferrer" className="contact-btn">
              💻 GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2026 Sophonie Graham. Built with React & ❤️</p>
          <p className="footer-location">📍 Based in Jamaica</p>
        </div>
      </footer>
    </div>
  );
}

export default App;