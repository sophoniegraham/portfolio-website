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
      description: 'Enterprise-grade financial analytics platform featuring real-time transaction tracking, monthly spending trends visualization, and comprehensive asset management. Built with React and Chart.js, implementing localStorage persistence and strict data validation.',
      tech: ['React', 'Chart.js', 'LocalStorage', 'Data Validation', 'Financial Analytics'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Data Visualization'
    },
    {
      title: 'Restaurant Orders Platform',
      description: 'Full-featured e-commerce ordering system with shopping cart functionality, real-time tax calculations, and persistent cart state. Demonstrates advanced state management and transaction processing logic.',
      tech: ['JavaScript', 'CSS3', 'LocalStorage', 'E-commerce Logic'],
      liveUrl: 'https://sophie-restaurantorder.netlify.app',
      githubUrl: 'https://github.com/sophoniegraham/restaurant-orders',
      category: 'E-commerce'
    },
    {
      title: 'Task Management System',
      description: 'Professional productivity application with category-based organization, advanced filtering capabilities, and data persistence. Features include real-time statistics, search functionality, and responsive design.',
      tech: ['React', 'LocalStorage', 'State Management', 'UI/UX Design'],
      liveUrl: 'https://sophie-todo-app.netlify.app',
      githubUrl: 'https://github.com/sophoniegraham/todo-app',
      category: 'Productivity'
    }
  ];

  const experiences = [
    {
      role: 'Technical Consultant',
      company: 'Johns Hopkins Technology Ventures',
      period: '2024 - Present',
      description: 'Providing strategic technology consulting for emerging ventures in the Johns Hopkins ecosystem. Leading UI/UX initiatives for healthcare technology platforms, conducting technical feasibility assessments, and advising on product development strategies for early-stage companies.',
      skills: ['Tech Consulting', 'UI/UX Strategy', 'Healthcare Technology', 'Product Advisory', 'Emerging Technologies']
    },
    {
      role: 'Lead Design Consultant',
      company: 'Johns Hopkins Medicine - Technology Innovation Center',
      period: '2023 - Present',
      description: 'Leading cross-functional design initiatives for clinical technology solutions at one of the nation\'s premier healthcare institutions. Collaborating with medical professionals, engineers, and product teams to deliver user-centered designs that enhance patient care and clinical workflows. Spearheading UI/UX research and design system development.',
      skills: ['Cross-functional Leadership', 'Clinical Tech Design', 'User Research', 'Design Systems', 'Stakeholder Management']
    },
    {
      role: 'UX Lead',
      company: 'LactiSure MVP',
      period: '2024',
      description: 'Directed comprehensive UX strategy for maternal health technology platform. Led user research initiatives, designed intuitive mobile interfaces, and conducted iterative usability testing. Established design frameworks that increased user engagement and improved accessibility for underserved populations.',
      skills: ['UX Strategy', 'Mobile Design', 'Usability Testing', 'Health Technology', 'Accessibility']
    },
    {
      role: 'AI Integration Developer',
      company: 'Maryland Business Innovation Association (MBIA)',
      period: '2024',
      description: 'Developed innovative AI-powered career mapping platform through MBIA partnership. Integrated machine learning algorithms for personalized career recommendations, implemented advanced data visualization dashboards, and architected scalable frontend systems. Collaborated with data scientists and product strategists to deliver intelligent career guidance solutions.',
      skills: ['AI Integration', 'Data Visualization', 'React Development', 'API Integration', 'Machine Learning Applications']
    }
  ];

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
                <div className="timeline-marker"></div>
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
            <a href="mailto:sophonieg14@gmail.com" className="contact-card">
              <h3>Email</h3>
              <p>sophonieg14@gmail.com</p>
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
          <p className="footer-location">Kingston, Jamaica</p>
        </div>
      </footer>
    </div>
  );
}

export default App;