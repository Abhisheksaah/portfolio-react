import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Abhishek Sah</h1>
        <p className="subtitle">Full Stack Developer</p>
      </header>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          Hi! I'm Abhishek, a passionate developer with experience in building web applications using React, Node.js, and more.
        </p>
      </section>
      <section id="projects" className="section">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Portfolio Website</strong> – This website showcasing my work and skills.
          </li>
          <li>
            <strong>Todo App</strong> – A simple and effective todo list built with React.
          </li>
        </ul>
      </section>
      <section id="skills" className="section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>React</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>HTML & CSS</li>
          <li>Git</li>
        </ul>
      </section>
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: abhishek@example.com</p>
        <p>LinkedIn: linkedin.com/in/abhisheksah</p>
      </section>
      <footer className="footer">
        &copy; {new Date().getFullYear()} Abhishek Sah
      </footer>
    </div>
  );
}

export default App;