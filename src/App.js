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
      title: 'FinancePulse Dashboard',
      description: 'Enterprise-grade financial analytics platform featuring real-time transaction tracking, monthly spending trends visualization with interactive charts, and comprehensive asset management. Implements localStorage persistence for seamless data continuity and strict validation protocols for transaction integrity.',
      tech: ['React', 'Canvas API', 'LocalStorage', 'Data Validation', 'Financial Analytics'],
      liveUrl: 'https://creatorverse-sophonie.netlify.app',
      githubUrl: 'https://github.com/sophoniegraham/Creatorverse',
      category: 'Data Visualization',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80'
    },
    {
      title: 'Restaurant Orders Platform',
      description: 'Full-featured e-commerce ordering system with sophisticated shopping cart functionality, real-time tax calculations, and persistent cart state management. Demonstrates advanced state management patterns and transaction processing logic with professional UI design.',
      tech: ['JavaScript', 'CSS3', 'LocalStorage', 'E-commerce Logic'],
      liveUrl: 'https://sophie-restaurantorder.netlify.app',
      githubUrl: 'https://github.com/sophoniegraham/restaurant-orders',
      category: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=500&fit=crop&q=80'
    },
    {
      title: 'Task Management System',
      description: 'Professional productivity application with category-based organization, advanced filtering capabilities, and robust data persistence. Features real-time statistics, intelligent search functionality, and responsive design optimized for cross-platform accessibility.',
      tech: ['React', 'LocalStorage', 'State Management', 'UI/UX Design'],
      liveUrl: 'https://sophie-todo-app.netlify.app',
      githubUrl: 'https://github.com/sophoniegraham/todo-app',
      category: 'Productivity',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop&q=80'
    }
  ];

  const experiences = [
    {
      role: 'Technical Consultant',
      company: 'Johns Hopkins Technology Ventures',
      period: '2024 - Present',
      description: 'Providing strategic technology consulting for emerging ventures in the Johns Hopkins innovation ecosystem. Leading UI/UX initiatives for healthcare technology platforms, conducting comprehensive technical feasibility assessments, and advising on product development strategies for early-stage companies. Collaborating with venture capital partners and entrepreneurs to accelerate commercialization of breakthrough technologies.',
      skills: ['Tech Consulting', 'UI/UX Strategy', 'Healthcare Technology', 'Product Advisory', 'Venture Development'],
      icon: 'briefcase'
    },
    {
      role: 'AI Integration Developer',
      company: 'Maryland Business Innovation Association',
      period: '2024',
      description: 'Developed innovative AI-powered career mapping platform through MBIA strategic partnership. Integrated machine learning algorithms for personalized career recommendations, implemented advanced data visualization dashboards, and architected scalable frontend systems. Collaborated with data scientists and product strategists to deliver intelligent career guidance solutions serving diverse professional populations.',
      skills: ['AI Integration', 'Data Visualization', 'React Development', 'API Integration', 'Machine Learning Applications'],
      icon: 'brain'
    },
    {
      role: 'Lead Design Consultant',
      company: 'Johns Hopkins Medicine - Technology Innovation Center',
      period: '2023 - Present',
      description: 'Leading cross-functional design initiatives for clinical technology solutions at premier healthcare institution. Collaborating with medical professionals, engineers, and product teams to deliver user-centered designs that enhance patient care and clinical workflows. Spearheading UI/UX research, design system development, and accessibility standards for mission-critical healthcare applications.',
      skills: ['Cross-functional Leadership', 'Clinical Tech Design', 'User Research', 'Design Systems', 'Healthcare Innovation'],
      icon: 'medical'
    },
    {
      role: 'UX Lead',
      company: 'LactiSure MVP',
      period: '2024',
      description: 'Directed comprehensive UX strategy for maternal health technology platform. Led user research initiatives, designed intuitive mobile interfaces, and conducted iterative usability testing. Established design frameworks that increased user engagement and improved accessibility for underserved populations in maternal healthcare.',
      skills: ['UX Strategy', 'Mobile Design', 'Usability Testing', 'Health Technology', 'Accessibility Design'],
      icon: 'heart'
    }
  ];

  const getIconPath = (iconType) => {
    const icons = {
      briefcase: 'M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9z',
      brain: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z',
      medical: 'M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z',
      heart: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
    };
    return icons[iconType] || icons.briefcase;
  };

  return (
    <div className="App">
      {/* Minimalist Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <h1 className="nav-logo">SOPHONIE GRAHAM</h1>
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
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="hero-label">Front End Developer</div>
          <h1 className="hero-title">Sophonie Graham</h1>
          <p className="hero-subtitle">Building intelligent interfaces for emerging technologies</p>
          <p className="hero-description">
            Specialized in UI/UX design and development for healthcare technology and enterprise applications.
            Experienced in leading cross-functional teams, integrating AI-powered solutions, and delivering
            user-centered designs that drive measurable impact.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('projects')} className="btn-primary">
              View Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-secondary">
              Get in Touch
            </button>
          </div>
          <div className="hero-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>UI/UX Design</span>
            <span>AI Integration</span>
            <span>Data Visualization</span>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Professional Experience</h2>
            <div className="section-line"></div>
          </div>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={getIconPath(exp.icon)} fill="currentColor"/>
                  </svg>
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <div className="timeline-period">{exp.period}</div>
                      <h3 className="timeline-role">{exp.role}</h3>
                      <h4 className="timeline-company">{exp.company}</h4>
                    </div>
                  </div>
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

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-line"></div>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image" style={{backgroundImage: `url(${project.image})`}}></div>
                <div className="project-content">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-buttons">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-project">
                      Live Demo
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-project-outline">
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Let's Connect</h2>
            <div className="section-line"></div>
          </div>
          <p className="contact-description">
            Open to opportunities in front end development, UI/UX design, and technical consulting.
            Let's discuss how I can contribute to your team.
          </p>
          <div className="contact-grid">
            <a href="mailto:sgraha04@gmail.com" className="contact-card">
              <h3>Email</h3>
              <p>sgraha04@gmail.com</p>
            </a>
            <a href="https://www.linkedin.com/in/sophonie-graham-b28705119/" target="_blank" rel="noopener noreferrer" className="contact-card">
              <h3>LinkedIn</h3>
              <p>Sophonie Graham</p>
            </a>
            <a href="https://github.com/sophoniegraham" target="_blank" rel="noopener noreferrer" className="contact-card">
              <h3>GitHub</h3>
              <p>@sophoniegraham</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 Sophonie Graham. All rights reserved.</p>
          <p className="footer-location">United States</p>
        </div>
      </footer>
    </div>
  );
}

export default App;