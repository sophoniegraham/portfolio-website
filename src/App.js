import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>👋🏾 Hi, I'm <span className="highlight">Sophie Graham!</span></h1>
        <p className="subtitle">Front-End Developer | Creative Thinker | Problem Solver</p>
      </header>

      <section className="projects-section" id="projects">
        <h2>🚀 Projects</h2>

        <div className="projects-grid">
          {/* To-Do App */}
          <div className="project-card">
            <h3>📝 To-Do App</h3>
            <p>A simple and clean task management app built with React.</p>
            <div className="buttons">
              <a href="https://sophie-todo-app.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn live">🌐 Live Site</a>
              <a href="https://github.com/sophoniegraham/todo-app" target="_blank" rel="noopener noreferrer" className="btn code">💻 GitHub Code</a>
            </div>
          </div>

          {/* Portfolio Website */}
          <div className="project-card">
            <h3>🎨 Portfolio Website</h3>
            <p>A professional portfolio showcasing my projects and skills. Built with React!</p>
            <div className="buttons">
              <a href="https://sophie-portfolio-website.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn live">🌐 Live Site</a>
              <a href="https://github.com/sophoniegraham/portfolio-website" target="_blank" rel="noopener noreferrer" className="btn code">💻 GitHub Code</a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <h2>💌 Contact Me</h2>
        <p>If you love creativity, tech, and good vibes — let's connect!</p>
        <div className="contact-buttons">
          <a href="mailto:sophonieg14@gmail.com" className="btn contact-btn">📧 Email Me</a>
          <a href="https://www.linkedin.com/in/sophonie-graham/" target="_blank" rel="noopener noreferrer" className="btn contact-btn">💼 LinkedIn</a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Sophie Graham. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
